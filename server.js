const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

// Create server from app
const server = http.createServer(app);

// require and attach io file to server
const io = require('./io');
io.attach(server);

app.use(logger('dev'));
app.use(express.json());

/* Configure serve-favicon & static middleware to serve
 from the production 'build' folder */
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Catch all route for SPA client side routing
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 for dev
const port = process.env.PORT || 3001;
server.listen(port, function() {
    console.log(`Express started on port ${port}`);
});