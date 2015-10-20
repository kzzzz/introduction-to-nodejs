process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", function (chunck) {
    process.stdout.write("Data -- ", chunck);
});

process.stdin.on("end", function () {
    process.stdout.write("Bye");
});