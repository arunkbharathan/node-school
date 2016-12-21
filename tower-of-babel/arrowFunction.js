//["Hello", "Arrow", "Function"] should result in "HAF"

var inputs = process.argv.slice(2);
var result = inputs.map(x => x[0].toUpperCase())
                   .reduce((t,c) => t+c);
console.log(result);
