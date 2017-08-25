var fs = require("fs");
var R = require('ramda');

fs.readFile('input/carpark-input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    // let dataString = data.toString();
    // var re = /[0-9]/;
    // let dataStr = dataString.match(re);
    // console.log("Read: " + dataStr)

    // TODO: pass data in automatically

        let n = 4;
        let k = 2;
        
    
        let carparks = R.range(0, n+2).map((i) => {
            return { carpark: i, available: true, LS: 0, RS: 0 }
            }
        )
        let nParks = carparks.length;
        let guardCarpark1 = carparks[0].available = false;
        let guardCarpark2 = carparks[nParks - 1].available = false;

        let count = 1;
while (count < nParks) {
    loop(carparks, count);
    count++
}

console.log(carparks)
 });

// determine how many carparks to the right
 function loop(carparks, c) {
     let count = 0;
     //carparks[4].available = false;
    for (i = c; carparks[i].available == true; i++ ) {
        count++
    }
    return carparks[c].RS = count;
}
 


