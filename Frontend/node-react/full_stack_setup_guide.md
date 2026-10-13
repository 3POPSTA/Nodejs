# Modern Full-Stack Project Setup Guide (Vite + React + Node.js)

This guide walks you through setting up a fast, modern full-stack application using **Vite + React** for the frontend and **Node.js + Express** for the backend.

## 📁 Project Structure

We will structure the project so that frontend and backend remain cleanly separated inside a single main root folder:

```
my-project/
├── frontend/        <-- Vite + React (User Interface)
└── backend/         <-- Node.js + Express (API Server)

```

## Step 1: Create the Root Directory

Open your terminal and create a folder to hold your entire project:

```
mkdir my-project
cd my-project

```

## Step 2: Set Up the Frontend (Vite + React)

Vite is the modern industry standard for React development. It installs in seconds and starts up instantly.

1. **Generate the React App:**

   ```
   npm create vite@latest frontend -- --template react
   
   ```

2. **Navigate to the frontend directory and install dependencies:**

   ```
   cd frontend
   npm install
   
   ```

3. **Start the Frontend Development Server:**

   ```
   npm run dev
   
   ```

   *Your app will be running at `http://localhost:5173`.*

## Step 3: Set Up the Backend (Node.js + Express)

Open a **new terminal tab/window** (so your frontend server keeps running) and navigate to your root `my-project` directory.

1. **Create and navigate to the backend folder:**

   ```
   mkdir backend
   cd backend
   
   ```

2. **Initialize Node.js package:**

   ```
   npm init -y
   
   ```

3. **Install Express and CORS:**

   ```
   npm install express cors
   
   ```

4. **Create the Server File (`server.js`):**
   Create a file named `server.js` inside the `backend` directory with the following content:

   ```
   const express = require('express');
   const cors = require('cors');
   
   const app = express();
   const PORT = 5000;
   
   // Middleware
   app.use(cors());
   app.use(express.json());
   
   // Test Route
   app.get('/api/message', (req, res) => {
     res.json({ message: 'Hello from the Node.js backend!' });
   });
   
   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });
   
   ```

5. **Run the Backend Server:**

   ```
   node server.js
   
   ```

## Step 4: Connecting Frontend to Backend

To fetch data from your backend server in your React application:

1. Open `frontend/src/App.jsx`.

2. Update the file to fetch data from your Express API:

   ```
   import { useEffect, useState } from 'react';
   
   function App() {
     const [message, setMessage] = useState('');
   
     useEffect(() => {
       fetch('http://localhost:5000/api/message')
         .then((res) => res.json())
         .then((data) => setMessage(data.message))
         .catch((err) => console.error(err));
     }, []);
   
     return (
       <div style={{ textAlign: 'center', marginTop: '50px' }}>
         <h1>React + Express Integration</h1>
         <p>Backend Status: <strong>{message || 'Connecting...'}</strong></p>
       </div>
     );
   }
   
   export default App;
   
   ```

## 🚀 Running Your Application

* **Frontend:** Run `npm run dev` inside `/frontend` (`http://localhost:5173`)

* **Backend:** Run `node server.js` inside `/backend` (`http://localhost:5000`)