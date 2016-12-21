var arg1 = process.argv[2];
var arg2 = process.argv[3];
//var PI = require('./Math').PI;
import {PI} from './modulesWithName_Math';
//var sqrt = require('./Math').sqrt;
import {sqrt} from './modulesWithName_Math';
//var square = require('./Math').square;
import {square} from './modulesWithName_Math';
//import {PI, sqrt, square} from './solution-math';


console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
