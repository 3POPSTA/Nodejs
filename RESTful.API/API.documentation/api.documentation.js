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
app.get('/api/users', (request, responses) => {
  responses.json([{ id: 1, name: 'John Doe', email: 'john@example.com' }]);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
  console.log('Swagger docs available at http://localhost:8080/api-docs');
});
