// Main.js
var arg1 = process.argv[2];
var arg2 = process.argv[3];

import math from './modulesDefaultExport_Math';
console.log(math.PI);
console.log(math.sqrt(+arg1));
console.log(math.square(+arg2));
