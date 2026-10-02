import express from "express";
const app = express();
const router = express.Router();

//Router level middleware
router.use((request,response,next)=>{
    console.log("Router specific middleware");
    next();
});

router.get("/user/:id",(request,response)=>{
    response.send("user profile");
});

app.use("/api",router);

