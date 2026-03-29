export interface PdfConversionResult {
  imageUrl: string;
  file: File | null;
  error?: string;
}

// Polyfill for SSR environments
if (typeof window !== "undefined" && !(window as any).DOMMatrix) {
  (window as any).DOMMatrix = class {};
}

let pdfjsLib: any = null;
let loadPromise: Promise<any> | null = null;

async function loadPdfJs(): Promise<any> {
  if (pdfjsLib) return pdfjsLib;
  if (loadPromise) return loadPromise;

  loadPromise = import("pdfjs-dist").then((lib: any) => {
    // IMPROVEMENT 1: Using unpkg to guarantee the worker version matches the installed library
    // Modern pdfjs-dist uses .mjs for the worker file.
    lib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${lib.version}/build/pdf.worker.min.mjs`;

    pdfjsLib = lib;
    return lib;
  });

  return loadPromise;
}

export async function convertPdfToImage(
  file: File
): Promise<PdfConversionResult> {
  if (typeof window === "undefined") {
    return {
      imageUrl: "",
      file: null,
      error: "Not running in browser",
    };
  }

  let pdfDoc: any = null; // Track the document so we can clean it out of memory later

  try {
    const lib = await loadPdfJs();
    const arrayBuffer = await file.arrayBuffer();

    // Load the PDF document
    pdfDoc = await lib.getDocument({ data: arrayBuffer }).promise;

    // Get the first page
    const page = await pdfDoc.getPage(1);

    // Set scale for high quality rendering
    const viewport = page.getViewport({ scale: 3 });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Canvas 2D context not supported");
    }

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // Ensure high-quality rendering
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    // Render the page onto the canvas
    await page.render({
      canvasContext: context,
      viewport,
    }).promise;

    // Convert canvas to Blob/File
    return await new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          // IMPROVEMENT 2: Free up browser memory once the render is done
          if (pdfDoc) pdfDoc.destroy();

          if (!blob) {
            return resolve({
              imageUrl: "",
              file: null,
              error: "Failed to create image blob",
            });
          }

          const fileName = file.name.replace(/\.pdf$/i, "");
          const imageFile = new File([blob], `${fileName}.png`, {
            type: "image/png",
          });

          resolve({
            imageUrl: URL.createObjectURL(blob),
            file: imageFile,
          });
        },
        "image/png",
        1.0 // Maximum quality
      );
    });
  } catch (err: any) {
    console.error("PDF conversion error:", err);
    
    // IMPROVEMENT 3: Ensure memory is freed even if the conversion crashes
    if (pdfDoc) pdfDoc.destroy();

    return {
      imageUrl: "",
      file: null,
      error: err?.message || "Failed to convert PDF",
    };
  }
}