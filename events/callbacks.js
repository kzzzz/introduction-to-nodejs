var onStart = function () {
    console.log("Getting resource stared");
};

var onData = function (data) {
    console.log("data: ", data);
};

var onEnd = function (evt) {
    console.log("Ended. Event data: ", evt)
};

var getResource = function (c, onStart, onData, onEnd) {
    process.nextTick(function () {
        var count = 0;
        onStart.call(this);

        var timer = setInterval(function () {
            onData.call(this, ++count);
            if (c === count) {
                onEnd.call(this, count);
                clearInterval(timer);
            }

        }, 10);
    });
};

getResource(10, onStart, onData, onEnd);