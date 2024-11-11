class Sockets {
  constructor(io) {
    this.io = io;

    this.socketsEvents();
  }

  socketsEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      // Recibe message from the message
      socket.on("message-to-server", (data) => {
        console.log(data);

        // Emit message to all clients
        this.io.emit("message-from-server", data);
      });
    });
  }
}

module.exports = Sockets;
