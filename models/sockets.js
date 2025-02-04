class Sockets {
  constructor(io) {
    this.io = io;

    this.socketsEvents();
  }

  socketsEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("New client connected");

      // Emit welcome message to the connected client
      socket.emit("welcome-message", "Welcome to the server!");

      // Get message from client
      socket.on("message-to-server", (data) => {
        console.log(data);

        // Emit message to all clients
        this.io.emit("message-from-server", data);
      });
    });
  }
}

module.exports = Sockets;
