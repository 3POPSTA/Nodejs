const express = require("express");
const app = express();
const port = 8080;

// app.get() - Handle GET requests
// app.post() - Handle POST requests
// app.put() - Handle PUT requests
// app.delete() - Handle DELETE requests
// app.all() - Handle all HTTP methods


// Respond to GET request on the root route
app.get("/",(request,response)=>{
    response.send("Homepage");
});

// Respond to POST request on the root route
app.post("/",(request,response)=> {
    response.send("POST request to the homepage");
});

// Respond to GET request on the /about route
app.get("/about",(request,response)=>{
    response.send("About Page");
});

// Catch all other routes
app.all("/{*splat}",(request,response)=> {
    response.status(404).send("404 - Page not found");
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});