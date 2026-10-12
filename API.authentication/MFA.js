const express = require('express');
const bodyParser = require('body-parser');
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');
const jwt = require('jsonwebtoken');
const app = express();

app.use(bodyParser.json());

// In-memory database (use a real database in production)
const users = [];
const JWT_SECRET = 'your-jwt-secret-key';

// Step 1: Register a user and set up MFA
app.post('/register', (request, response) => {
  const { username, password } = request.body;
 
  // Check if user already exists
  if (users.find(u => u.username === username)) {
    return response.status(400).json({ message: 'Username already exists' });
  }
 
  // Generate secret for TOTP
  const secret = speakeasy.generateSecret({
    name: `MyApp:${username}`
  });
 
  // Create user
  const newUser = {
    id: users.length + 1,
    username,
    password, // In production, hash passwords!
    mfaSecret: secret.base32,
    mfaEnabled: false
  };
 
  users.push(newUser);
 
  // Generate QR code for TOTP setup
  QRCode.toDataURL(secret.otpauth_url, (err, dataUrl) => {
    if (err) {
      return response.status(500).json({ message: 'Error generating QR code' });
    }
   
    response.json({
      message: 'User registered. Please set up MFA.',
      user: {
        id: newUser.id,
        username: newUser.username
      },
      mfaSecret: secret.base32,
      qrCode: dataUrl
    });
  });
});

// Step 2: Verify and enable MFA
app.post('/verify-mfa', (request, response) => {
  const { username, token } = request.body;
 
  // Find user
  const user = users.find(u => u.username === username);
 
  if (!user) {
    return response.status(404).json({ message: 'User not found' });
  }
 
  // Verify token against user's secret
  const verified = speakeasy.totp.verify({
    secret: user.mfaSecret,
    encoding: 'base32',
    token
  });
 
  if (!verified) {
    return response.status(400).json({ message: 'Invalid MFA token' });
  }
 
  // Enable MFA for user
  user.mfaEnabled = true;
 
  response.json({ message: 'MFA enabled successfully' });
});

// Step 3: Login with MFA
app.post('/login', (request, response) => {
  const { username, password } = request.body;
 
  // Find user
  const user = users.find(u => u.username === username && u.password === password);
 
  if (!user) {
    return response.status(401).json({ message: 'Invalid credentials' });
  }
 
  // Check if MFA is enabled
  if (user.mfaEnabled) {
    return response.json({
      message: 'Password verified. MFA token required.',
      requireMFA: true,
      userId: user.id
    });
  }
 
  // If MFA not enabled, generate token directly
  const token = jwt.sign(
    { id: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
 
  response.json({ message: 'Login successful', token });
});

// Step 4: Verify MFA token and complete login
app.post('/verify-login', (request, response) => {
  const { userId, mfaToken } = request.body;
 
  // Find user
  const user = users.find(u => u.id === userId);
 
  if (!user) {
    return response.status(404).json({ message: 'User not found' });
  }
 
  // Verify MFA token
  const verified = speakeasy.totp.verify({
    secret: user.mfaSecret,
    encoding: 'base32',
    token: mfaToken
  });
 
  if (!verified) {
    return response.status(401).json({ message: 'Invalid MFA token' });
  }
 
  // Generate JWT token
  const token = jwt.sign(
    { id: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
 
  response.json({ message: 'Login successful', token });
});

// Start server
app.listen(8080, () => {
  console.log('Server running on port 8080');
});