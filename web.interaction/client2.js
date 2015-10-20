var http = require('http');

var options = {
    host: 'www.kvk.nl',
    port: 80,
    path: '/',
    method: 'POST',
};

var request = http.request(options, function (response) {
    console.log('Status code: ', response.statusCode);

    response.pipe(process.stdout); // write response to console

    console.log('Ending request');
});

request.end();