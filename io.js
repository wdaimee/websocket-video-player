const io = require('socket.io')();

// initial state of app
const state = {
    url: 'https://www.youtube.com/watch?v=Zk4Gufx-O2k',
    playing: false,
    volume: 0.8,
    mute: false,
    currentTime: 0,
    seekTo: 0
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
    // When the volume up button is pressed, increase the volume
    socket.on('volume-up', () => {
        // use .toFixed to force to 1 decimal place and convert back to float from string
        state.volume >= 1 ? state.volume = 1 : state.volume = parseFloat((state.volume += 0.1).toFixed(1));
        console.log(state.volume);
        socket.broadcast.emit('volume-up', state.volume);
    });
    // When the volume down button is pressed, decrease the volume
    socket.on('volume-down', () => {
        // use .toFixed to force to 1 decimal place and convert back to float from string
        state.volume <= 0 ? state.volume = 0 : state.volume = parseFloat((state.volume -= 0.1).toFixed(1));
        console.log(state.volume)
        socket.broadcast.emit('volume-down', state.volume);
    });
    // When mute button is pressed, toggle mute state boolean value
    socket.on('mute', () => {
        state.mute = !state.mute;
        socket.broadcast.emit('mute');
    });
    /* When the fast forward button is pressed, add 10 seconds to the current time
       and send back as seekTo */
    socket.on('forward', () => {
        state.seekTo = state.currentTime + 10;
        socket.broadcast.emit('forward', state.seekTo);
    });
    /* When the rewind button is pressed, subtract 10 seconds to the current time 
       if the new seekTo time is 0 or less, set seekTo time to 0 */
    socket.on('rewind', () => {
        (state.currentTime - 10) <= 0 ? state.seekTo = 0 : state.seekTo = state.currentTime - 10;
        socket.broadcast.emit('rewind', state.seekTo);
    });
    // When the played timer is sent back to database, set state object to played timer and emit to clients
    socket.on('current-time', currentTime => {
        state.currentTime = parseInt(currentTime);
        socket.broadcast.emit('current-time', state.currentTime);
    });
    socket.on("disconnect", () => {
        console.log("disconnected");
    });
});

module.exports = io;