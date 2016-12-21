//["Hello", "arrow", "functions"] would become "Haf
// [Hello,arrow,functions] becomes "Haf"

let inputs = process.argv.slice(2);
let result = inputs.map(x => x[0])
                        .reduce((t,c) => t+c);
console.log(`[${inputs}] becomes "${result}"`);
