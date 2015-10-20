var Resource = require("./modules/Resource");

var r = new Resource(10);

r.on("start", function () {
    console.log("I'v started");
});

r.on("data", function (data) {
    console.log("I received data: ", data);
});

r.on("end", function (evt) {
    console.log("I am done, with data event", evt);
});