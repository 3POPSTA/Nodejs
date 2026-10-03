import express from "express";
const app = express();
const port = 3000;

// Authentication middleware
function authenticate(request,response,next){
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).send("Authentication Required");
    }

    const token = authHeader.split(" ")[1];

    if(token === "secret-token"){
        request.user = {id:123,username: "John"};
        next();
    }
    else{
        response.status(403).send("Invalid Token");
    }
}

app.get("/api/protected",authenticate,(request,response)=>{
    response.json({message:"Protected data", user:request.user});
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})