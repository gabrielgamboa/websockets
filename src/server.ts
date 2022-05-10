import express from "express";
import path from "path"
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

const server = createServer(app);

app.use(express.static(path.resolve(__dirname, "..", "public")));

const io = new Server(server);

io.on("connection", (socket) => {
    console.log("Socket", socket);
});

server.listen(3000, () => console.log('Server is running on port 3333'));