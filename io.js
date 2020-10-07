const io = require('socket.io')();

// initial state of app
const state = {
    url: 'https://www.youtube.com/watch?v=Zk4Gufx-O2k',
    playing: false
}

io.on("connection", function(socket) {
    console.log('connected to io');
    // When socket connects, send the state object to the client
    io.emit('connected', state);
    /* when a url change message is received by backend, emit url 
     change message to all other clients */
    socket.on('url change', data => {
        state.url = data.url
        socket.broadcast.emit('url changed', state.url)
    });
    // When play/pause button is pressed, toggle playing state boolean value
    socket.on('play', () => {
        state.playing = !state.playing;
        socket.broadcast.emit('play');
    });
    socket.on("disconnect", () => {
        console.log("disconnected");
    });
});

module.exports = io;