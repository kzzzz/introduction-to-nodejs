var request = require("request");

var stream = request("http://www.raet.com");

stream.on("data", function (chunck) {
    console.log(">>>> data >>>>", chunck);
});

stream.on("end", function () {
    console.log(">>> end >>>>");
});