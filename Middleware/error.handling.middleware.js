const express = require('express');
const router = express.Router();
const app = express();


app.use((error, request, response, next) => {
  console.error(error.stack);
  response.status(500).send('Something broke!');
});