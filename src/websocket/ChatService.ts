import { io } from "../app";

io.on("connection", (socket) => { 
    socket.emit("chat_iniciado", { //cria um evento chamado chat_iniciado
        message: "Seu chat foi iniciado",
    });
});
