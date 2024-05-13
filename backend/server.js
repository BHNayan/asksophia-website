// server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  // Handle chat messages
  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  });
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});
