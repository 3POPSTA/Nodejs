const express = require("express");
// npm install jsonwebtoken
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
// const { response } = require("express");
const app = express();

app.use(bodyParser.json());

const JWT_SECRET = "your-jwt-secret-key";

// Sample user database
const users = [
    { id: 1, username: 'user1', password: 'password1', role: 'user' }
];

app.post("/login",(request,response)=>{
    const { username, password }= request.body;

    // Find user
    const user = users.find(u=> u.username == username && u.password === password);

    if(!user){
        return response.status(401).json({ message: 'Invalid credentials' });
    }

    // Create payload for JWT
    const payload = {
        id: user.id,
        username: user.username,
        role: user.role
    }

    //sign token
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    response.json({ message: 'Login successful', token });
});

// Middleware for JWT verification
const authenticateJWT = (request,response,next)=>{
    // Get auth header - The Authorization header is commonly used to send authentication tokens
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).json({ message: 'Authorization header missing' });
    }

    // Extract token from "Bearer <token>"
    const token = authHeader.split(" ")[1];

    if(!token){
        return response.status(401).json({ message: 'Token missing' });
    }

    // Verify token
    try{
        const decoded = jwt.verify(token, JWT_SECRET);

        // Attach user to request
        request.user = decoded;
        next();
    }
    catch(error){
        return response.status(403).json({ message: 'Invalid or expired token' });
    }
}

// Protected route
app.get("/profile",authenticateJWT, (request,response)=>{
    response.json({ message: 'Profile accessed', user: request.user });
});

// Role-based route
app.get("/admin",authenticateJWT,(request,response)=>{
    // Check if user has admin role
    if(request.user.role !== "admin"){
        return response.status(403).json({ message: 'Access denied: admin role required' });
    }
    response.json({ message: 'Admin panel accessed' });
});

// Start server
const port = 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});