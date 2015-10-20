var EventEmitter = require("events").EventEmitter;

var getResource = function (c) {

    var e = new EventEmitter();

    process.nextTick(function () {
        var count = 0;
        e.emit("start");

        var timer = setInterval(function () {
            e.emit("data", ++count);

            if (count === c) {
                e.emit("end", count);
                clearInterval(timer);
            }
        }, 10);
    });

    return e;
};

var resource = getResource(10);

resource.on("start", function () {
    console.log("I'v started");
});

resource.on("data", function (data) {
    console.log("I received data: ", data);
});

resource.on("end", function (evt) {
    console.log("I am done, with data event", evt);
});