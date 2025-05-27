const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = 3000;
const app = express();

const server = http.createServer(app);

const io = socketio(server);

app.get("/", (req, res) => {
    res.send("Hey!");
});

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

