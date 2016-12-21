// Write a function that takes one argument for each invocation. Each time it is
// called, it should add its argument to a running total and return itself. If it is called with no
// arguments, it should return the sum of all the arguments passed.

sum = 0;

var invocation = function (...args){
  if (args.length === 1){
    sum+=args[0];
    return invocation;
  }else{
    let tmp = sum;
    sum = null;
    return tmp;
  }
};

module.exports = invocation;


// var total = 0;
// var delayInvoc = function (a) {
//   if (a === undefined) {
//     var result = total;
//     total = null;
//     return result;
//   } else {
//     total = total + a;
//     return delayInvoc;
//   }
// };
//
// module.exports = delayInvoc;
