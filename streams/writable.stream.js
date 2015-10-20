
console.log("Is 'stdout' writable?", process.stdout.writable);

process.stdout.write("Hello World, \n", function(){
    console.log("Will this be called");
});

process.stdout.write("The second write \n");