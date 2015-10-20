var util = require("util");

var EventEmitter = require("events").EventEmitter;

function Resource(m) {
    var maxEvents = m;
    var that = this;

    function onNextTick() {
        var count = 0;
        that.emit("start");

        var timer = setInterval(function () {
            that.emit("data", ++count);

            if (count === maxEvents) {
                that.emit("end", count);
                clearInterval(timer);
            }
        }, 100);
    }

    process.nextTick(onNextTick);

};

util.inherits(Resource, EventEmitter);

module.exports = Resource;