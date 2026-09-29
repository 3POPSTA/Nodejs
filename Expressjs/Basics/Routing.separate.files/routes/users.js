const express = require("express");
const router = express.Router();

// Middleware specific to this router
router.use((request,response,next)=>{
    console.log("Users Router Time:",Date.now());
    next();
});

// Define routes
router.get("/",(request,response)=>{
    response.send("User home page");
});

router.get('/:id', (request, response) => {
  response.send(`User profile for ID: ${request.params.id}`);
});
module.exports = router;