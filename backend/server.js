// server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // Handle incoming messages from users
  socket.on('user message', (message) => {
    // Forward the message to all connected agents
    io.emit('agent message', message);
  });

  // Handle incoming messages from agents
  socket.on('agent message', (message) => {
    // Forward the message to all connected users
    io.emit('user message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
