const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(request,response)=>{
    response.sendFile(path.join(__dirname,"public","index.html"));
});

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("chat message",(message)=> {
        console.log("Message received: ", message);
        io.emit("chat message", message);
    });

    socket.on("disconnect",() =>{
        console.log("A user disconnected");
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});





