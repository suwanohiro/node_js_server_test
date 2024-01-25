import TCPServer from "./server";

const server: TCPServer = new TCPServer("127.0.0.1", 3000);
server.start();
