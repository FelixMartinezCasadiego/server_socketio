const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const cors = require("cors");

// Cusoms methods
const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Http Server
    this.server = http.createServer(this.app);

    // Configuration socket server
    this.io = socketio(this.server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));

    // CORS
    this.app.use(cors());
  }

  configurationSockets() {
    new Sockets(this.io);
  }

  execute() {
    // Init middle
    this.middlewares();

    // Init Sockets
    this.configurationSockets();

    // Init Server
    this.server.listen(this.port, () => {
      console.log(`Server running on port:${this.port}`);
    });
  }
}

module.exports = Server;
