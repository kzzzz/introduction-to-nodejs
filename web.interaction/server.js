var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello from server</h1>')
    res.end("<p>Good bye!</p>");

});

server.listen(3000, function () {
    console.log('Server started');
});

