const Server = require("./models/server");
require("dotenv").config();

const server = new Server();

server.execute();

// // Express Server
// const express = require("express");
// const app = require("express")();

// // Sockets server
// const server = require("http").createServer(app);

// // Configuration socket server
// const io = require("socket.io")(server);

// app.use(express.static(__dirname + "/public"));
// io.on("connection", (socket) => {
//   console.log("Connected client with ID:", socket.id);

//   // Send message to the Client
//   /* socket.emit("welcome-message", {
//     message: `Welcome client: ${socket.id}`,
//     fecha: new Date(),
//   }); */

//   // Recibe message from the message
//   socket.on("message-to-server", (data) => {
//     console.log(data);

//     // Message just one client
//     /* socket.emit("message-from-server", data); */
//     socket.emit("message-from-server", data);
//   });
// });

// // Port
// const PORT = 8080;
// server.listen(PORT, () => {
//   console.log(`Server running on port:${PORT}`);
// });
