const program = require('commander');
const csv = require('csv');
const fs = require('fs');

program
  .version('0.0.1')
  .option('-l, --list [list]', 'List of input from CSV')
  .parse(process.argv)

let parse = csv.parse;
let stream = fs.createReadStream(program.list)
    .pipe(parse({ delimiter : ',' }));

stream
  .on('data', function (data) {
    let n = data[0];
    let k = data[1];
    console.log(n, k);
  });

