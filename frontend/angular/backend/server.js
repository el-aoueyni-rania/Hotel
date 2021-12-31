const http = require('http');

const server = http.createServer((req, res) =>{

    res.end('Hello DSI31');
});

server.listen(3000);