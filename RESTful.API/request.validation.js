const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());

// Validation schema
const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).max(120)
});

app.post('/api/users', (request, response) => {
  // Validate request body
  const { error } = userSchema.validate(request.body);
  if (error) {
    return response.status(400).json({ message: error.details[0].message });
  }

  // Process valid request
  // ...
  response.status(201).json({ message: 'User created successfully' });
});

app.listen(8080);