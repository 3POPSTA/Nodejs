const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (request, response) => {
  response.send('Products list');
});

router.get('/:id', (request, response) => {
  response.send(`Product details for ID: ${request.params.id}`);
});

module.exports = router;