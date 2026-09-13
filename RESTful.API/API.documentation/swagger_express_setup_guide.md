# Setting Up Express with Swagger Documentation

This guide covers the necessary steps to set up a Node.js project and install the required dependencies (`express`, `swagger-jsdoc`, and `swagger-ui-express`) to get your API documentation up and running.

## Prerequisites

Before proceeding, ensure you have **Node.js** and npm (Node Package Manager) installed on your system. You can verify your installation by running the following commands in your terminal:

```bash
node -v
npm -v
```

---

## Step-by-Step Setup

### 1. Create and Navigate to Your Project Directory
Open your terminal and create a new folder for your project, then navigate into it:

```bash
mkdir express-swagger-api
cd express-swagger-api
```

### 2. Initialize a Node.js Project
Run the initialization command to create a default `package.json` file, which tracks your project dependencies:

```bash
npm init -y
```

### 3. Install the Required Dependencies
Install Express alongside the two Swagger packages required for parsing JSDoc comments and serving the interactive UI:

```bash
npm install express swagger-jsdoc swagger-ui-express
```

---

## Example Code Usage

Create a file named `server.js` and paste the following code to verify your setup:

```javascript
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'A simple Express User API'
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Development server'
      }
    ]
  },
  apis: ['./server.js'] // Adjust this path depending on where your route definitions/comments are
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Returns a list of users
 *     description: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */
app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe', email: 'john@example.com' }]);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
  console.log('Swagger docs available at http://localhost:8080/api-docs');
});
```

---

## Running Your Application

Start your server with Node:

```bash
node server.js
```

Open your browser and navigate to **`http://localhost:8080/api-docs`** to interact with your newly generated Swagger documentation interface!