/*For this level, use `prompt()` to fetch a string. Split the string that
`prompt()` returns by commas (`str.split(',')` returns a separated array of
strings) and run this array through `uniq()` to discard repeated items.
Use `console.log()` to print the resulting uniq array.
*/
const uniq = require('uniq');
let inp = prompt('enter a list');
console.log(uniq(inp.split(',')));
