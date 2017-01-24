const ops = require('./ndjson.js');

let first = prompt("FIRST:");
let second = prompt('SECOND:');

console.log(ops.parse(first));
console.log(ops.stringify(second));
