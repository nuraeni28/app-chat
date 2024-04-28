const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: "*"}
});

const PORT = process.env.PORT || 3000;

// Menangani koneksi socket
io.on('connection', (socket) => {
    console.log('A user connected');

    // Menangani ketika pengguna bergabung
    socket.on('new-user-joined', (username) => {
        console.log(`${username} joined the chat`);
        socket.username = username; // Menyimpan nama pengguna pada objek socket
        io.emit('user-connected', username);
    });

    // Menangani pesan dari pengguna
    socket.on('chat message', (message) => {
        console.log('Message:', message);
        io.emit('message', { user: socket.username, message });
    });

    // Menangani ketika pengguna keluar
    socket.on('disconnect', () => {
       
        console.log('A user disconnected');
    });
});



server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
