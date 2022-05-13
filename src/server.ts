import { server } from "./app";
import "./websocket/ChatService";

server.listen(3000, () => console.log('Server is running on port 3333'));