// Menghubungkan ke server Socket.IO
const socket = io('http://localhost:3000');

// Mendapatkan elemen-elemen yang diperlukan dari HTML
const chatForm = document.getElementById('chatForm');
const teksPesan = document.getElementById('teksPesan');
const chatBox = document.querySelector('.chat-box');
const input = document.getElementById('input');

// Mendapatkan nama pengguna
let username;
do {
    username = prompt("Enter Your Name:");
} while (!username);

console.log(socket.connected);
// Mengirimkan nama pengguna ke server saat bergabung
socket.emit("new-user-joined", username);

// Menambahkan pesan saat pengguna bergabung atau keluar
socket.on('user-connected', (username) => {
        console.log(username);
    userJoinLeft(username, 'joined');
});

socket.on("user-disconnected", (username) => {
    userJoinLeft(username, 'left');
});

function userJoinLeft(name, status) {
    let div = document.createElement('div');
    div.classList.add('user-join');
    let content = `<p><b>${name}</b> ${status} the chat</p>`;
    div.innerHTML = content;
    chatBox.appendChild(div);
}

// Menangani pengiriman pesan
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pesan = teksPesan.value.trim();
    if (pesan !== '') {
        appendMessage2({ user: username, message: pesan }, 'outgoing');
        socket.emit('chat message',{ user: username, message: pesan });
        teksPesan.value = '';
    }
});

// Menampilkan pesan yang diterima dari server
socket.on('message', (pesan) => {
        if (pesan.message.user !== username) {
            appendMessage(pesan, 'incoming');
        }
    });

// Menambahkan pesan ke kotak obrolan
function appendMessage(data, status) {
    let div = document.createElement('div');
    div.classList.add('chat', status);
    let content = `
        <div class="details">
            <span>${data.message.user}</span>
            <p>${data.message.message}</p>
        </div>
    `;
    div.innerHTML = content;
    chatBox.appendChild(div);
}
function appendMessage2(data, status) {
    let div = document.createElement('div');
    div.classList.add('chat', status);
    let content = `
        <div class="details">
            <span>You</span>
            <p>${data.message}</p>
        </div>
    `;
    div.innerHTML = content;
    chatBox.appendChild(div);
}
