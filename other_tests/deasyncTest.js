
var deasync = require('deasync');

function myAsyncFunction(a,cb){
	console.log(a);
	setTimeout(() => cb(null,'out of async'), 10000);
}


function cb(err,res){
}

var myAsyncFunction = deasync(myAsyncFunction);
console.log('not done');
console.log(myAsyncFunction('in async'));
console.log('done');







// var done = false;
// var data;

// function myAsyncFunction(a,cb){
// 	console.log(a)
// 	setTimeout(() => cb('inasync'), 10000);
// }
// function cb(res){
//     data = res;
//     done = true;
// }

// myAsyncFunction('val',cb);
// console.log("data is not populated",data)
// require('deasync').loopWhile(function(){return !done;});
// // data is now populated
// console.log("data is now populated",data)
