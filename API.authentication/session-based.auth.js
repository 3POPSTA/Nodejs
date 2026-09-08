const express = require("express");
//npm install express-session body-parser
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();

// Parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//Configure sessions
app.use(session({
    secret: "your-secret",
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000
    }
}));

//sample user database
const users = [
    {
        id: 1,
        username: "user1",
        password: "password"
    }
];

//Login route
app.post("/login",(request,response)=>{
    const { username, password } = request.body;

    //find user
    const user = users.find(u => u.username === username && u.password === password);
    if(!user){
        return response.status(401).json({message: 'Invalid credentials'});
    }

    // Store user information in session (excluding password)
    request.session.user = {
        id: user.id,
        username: user.username
    };

    response.json({message: 'Login successful', user: request.session.user });
});

// Protected route
app.get("/profile",(request,response)=>{
    if(!request.session.user){
        return response.status(401).json({message: "Unauthorized"});
    }
    response.json({message: 'Profile accessed', user: request.session.user});
});

// Logout route
app.post("/logout",(request,response)=>{
    request.session.destroy((error)=>{
        if(error){
            return response.status(500).json({message: 'Logout failed'});
        }
        response.json({ message: 'Logout successful' });
    });
});

//Start server
const port = 3000
app.listen(port,()=>{
    console.log(`Running at http://localhost:${port}`);
});