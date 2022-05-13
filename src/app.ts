import express from "express";
import path from "path"
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

const server = createServer(app);

app.use(express.static(path.resolve(__dirname, "..", "public")));

const io = new Server(server); //cria o servidor socket

export { server, io };