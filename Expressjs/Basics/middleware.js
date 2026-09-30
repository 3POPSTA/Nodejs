const express = require("express");
const app = express();
const port = 8080;

// express.json() - Parse JSON request bodies
// express.urlencoded() - Parse URL-encoded request bodies
// express.static() - Serve static files
// express.Router() - Create modular route handlers

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to serve static files from a directory
app.use(express.static("public"));

// POST route that uses JSON middleware
app.post("/api/users",(request,response)=>{
    console.log(request.body);
    response.status(201).json({ message: 'User created', user: request.body });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});