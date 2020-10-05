const io = require('socket.io')();

io.on("connection", function(socket) {
    console.log('connected to io');
});

module.exports = io;