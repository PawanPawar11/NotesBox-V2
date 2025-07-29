# 🗃️ NotesBox-V2 – Notes Web App

A simple and responsive notes application built with TypeScript, React, and Express. Supports full CRUD operations, dark/light themes, and smooth user interactions — fully deployed on Render.

## 🔧 Features

- 📝 Full CRUD support — create, read, update, and delete notes
- 🏠 All notes are displayed neatly on the homepage
- 🌗 Toggle between dark and light themes
- ➕ A "New Note" button allows quick note creation
- 🖊️ Edit and 🗑️ delete icons appear on hover for each note
- 🔁 Edit button redirects to a dedicated page with form to update the note
- 🧹 Delete button removes a note smoothly without affecting the layout
- 🌐 Deployed on Render for online access

## 📁 Environment Configuration

Create a `.env` file in the root directory of the backend and add:

```
PORT=3000
MONGODB_URI=your_mongo_connection_string
```

Create a `.env` file in the root directory of the frontend and add:

```
VITE_BACKEND_URL=http://localhost:5001
```

## ▶️ Run the App

### 🖥️ Backend

```bash
cd backend
npm install
npm run dev
```

### 🌐 Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🧱 Tech Stack Overview

### 🔧 Backend

- ⚙️ Express.js – API routing and backend logic
- 🧬 Mongoose – MongoDB integration for storing notes
- 🔐 dotenv – For environment variable management
- 🔄 CORS – Enables communication between frontend and backend
- 🛠️ Nodemon – Auto-reloads the server during development

### 🎨 Frontend

- ⚛️ React (v19) + TypeScript – Main frontend framework
- 🧭 React Router v7 – Manages navigation and routes
- 💅 Tailwind CSS + shadcn/ui – Clean, utility-first styling
- 🧱 Lucide React – Minimal, modern icons
- 🔗 Axios – API communication between frontend and backend
- ⚡ Vite – Fast build tool and dev server
- ✅ ESLint – Code linting with support for TypeScript + React

## 📊 Architecture & Flow

![Architecture](/assets/architecture.png)

Architecture

![Flowchart](/assets/flowchart.png)

Flowchart