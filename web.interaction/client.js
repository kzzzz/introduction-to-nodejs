var http = require('http');

console.log('Staring request');

var request = http.request('http://www.kvk.nl/', function(res){
    console.log('Status code: ', res.statusCode);
    res.pipe(process.stdout);
});

request.end();

console.log('Requested ended');


