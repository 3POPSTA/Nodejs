const express = require('express');
const app = express();

// Sample user database
const users = [
  { username: 'user1', password: 'password1' }
];

// Basic authentication middleware
const basicAuth = (request, response, next) => {
  // Get Authorization header
  const authHeader = request.headers.authorization;
 
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    // If no credentials provided, request authentication
    response.setHeader('WWW-Authenticate', 'Basic realm="API Authentication"');
    return response.status(401).json({ message: 'Authentication required' });
  }
 
  // Extract and decode credentials
  const encodedCredentials = authHeader.split(' ')[1];
  const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8');
  const [username, password] = decodedCredentials.split(':');
 
  // Validate credentials
  const user = users.find(u => u.username === username && u.password === password);
 
  if (!user) {
    response.setHeader('WWW-Authenticate', 'Basic realm="API Authentication"');
    return response.status(401).json({ message: 'Invalid credentials' });
  }
 
  // Attach user to request
  request.user = { username: user.username };
 
  next();
};

// Protected route
app.get('/api/data', basicAuth, (request, response) => {
  response.json({
    message: 'Data accessed',
    user: request.user.username,
    data: { example: 'Sensitive data' }
  });
});

// Start server
app.listen(8080, () => {
  console.log('Server running on port 8080');
});