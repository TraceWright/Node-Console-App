var fs = require("fs")

fs.readFile('input/carpark-input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    let dataString = data.toString();
    console.log("Read: " + dataString)
 });