const app = require('express')();
const server = require('http').createServer(app); 
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('user connected');

  socket.emit('chat', 'Welcome to the chat room!');

  socket.on('chat', (payload) => {
    console.log('payload', payload);
    io.emit('chat', payload); // Broadcast the payload to all connected clients
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
