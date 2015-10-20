var request = require("request");
var zlib = require("zlib");
var fs = require("fs");

var stream = request("http://www.raet.nl");

stream.pipe(process.stdout);

request("http://www.kvk.nl")
    .pipe(fs.createWriteStream("kvk.html"));

request("http://www.google.nl")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("google.html.gz"));