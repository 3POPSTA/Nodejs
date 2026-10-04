import express, { response } from "express";
const app = express();
const port = 3000;


app.get("/async-data", async (request,response,next)=>{
    try{
        const data = await fetchDataFromDatabase();
        response.json(data);
    }
    catch(error){
        next(error);
    }
});

function asyncHandler(fn){
    return (request,response,next)=>{
        Promise.resolve(fn(request,response,next)).catch(next);
    }
}

app.get('/better-async', asyncHandler(async (request, response) => {
    const data = await fetchDataFromDatabase();
    response.json(data);
}));