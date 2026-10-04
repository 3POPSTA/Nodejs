import express, { response } from "express";
const app = express();
const port = 3000;

// Regular route that might throw an error
app.get("error-demo",(request,response,next)=>{
    try{
        throw new Error("Something went wrong");
    }
    catch(error){
        next(error);
    }
});

// Error-handling middleware
app.use((error,request,response,next)=>{
    console.error(error.stack);
    response.status(500).json({
        message: 'An error occurred',
        error: process.env.NODE_ENV === 'production' ? {} : error
    });
});