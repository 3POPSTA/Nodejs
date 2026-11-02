const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//Server static files
app.use(express.static(path.join(__dirname,"public")));

//Simple route
app.get("/",(request,response)=>{
    response.sendFile(path.join(__dirname,"public","index.html"));
});

// Socket.IO connection handler
io.on("connection",(socket) => {
    console.log("A user connected");

    //Handle new messages
    socket.on("chat message",(message)=>{
        console.log("Message Recieved: ",message);
        
        // Broadcast the message to all connected clients
        io.emit("chat message", message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Socket Running at http://localhost:${PORT}`)
})