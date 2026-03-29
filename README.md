<<<<<<< HEAD
# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
=======
# 📄 RESUMIND

**RESUMIND** is an AI-powered resume analysis application designed to help job seekers optimize their resumes for Applicant Tracking Systems (ATS). By simply uploading a PDF, users receive instant, actionable feedback on their resume's tone, content, structure, and skills.

## ✨ Features

* **AI-Powered Insights:** Utilizes advanced LLMs to provide a comprehensive ATS score and detailed improvement tips.
* **Smart PDF Processing:** Seamlessly converts uploaded PDF resumes into high-quality images for visual tracking and review directly in the browser.
* **Categorized Feedback:** Breaks down feedback into easily digestible sections: Tone & Style, Content, Structure, and Skills.
* **Interactive UI:** Built with a modern, responsive interface featuring interactive accordions, dynamic score gauges, and smooth animations.
* **Cloud Storage & Auth:** Secure user authentication, resume storage, and file hosting powered by Puter.js.

## 🛠️ Tech Stack

* **Frontend:** React, React Router, Tailwind CSS
* **Backend/BaaS:** Puter.js (Auth, Key-Value Storage, File System, AI)
* **Utilities:** `pdf.js` (PDF-to-Image conversion), `react-dropzone`
* **Styling:** Tailwind CSS with custom animations and gradients

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/resumind.git](https://github.com/your-username/resumind.git)
   cd resumind
>>>>>>> c22a5fc53d15c4d116f5210cbbd47909a5d79e8d
