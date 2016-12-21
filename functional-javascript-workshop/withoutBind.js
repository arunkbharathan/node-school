var slice = Array.prototype.slice

    function logger(namespace) {
      // SOLUTION GOES HERE
      
      return function() {
// Invoke the originally-specified function, passing in all originally-
// specified arguments, followed by any just-specified arguments.
var args = slice.call(arguments);
return console.log.apply(this, [namespace].concat(args));
};
    }

    module.exports = logger


    //Math.max.apply(null,[1,4,8,4])



// var originalfoo = someobject.foo;
// someobject.foo = function() {
//   // Do stuff before calling function
//   console.log(arguments);
//   // Call the function as it would have been called normally:
//   originalfoo.apply(this, arguments);
//   // Run stuff after, here.
// }



// var info = logger('INFO:')
//     info('this is an info message')
//     // INFO: this is an info message

//     var warn = logger('WARN:')
//     warn('this is a warning message', 'with more info')
//     // WARN: this is a warning message with more info

// function partial(fn /*, args...*/) {
// // A reference to the Array#slice method.
// var slice = Array.prototype.slice;
// // Convert arguments object to an array, removing the first argument.
// var args = slice.call(arguments, 1);
// return function() {
// // Invoke the originally-specified function, passing in all originally-
// // specified arguments, followed by any just-specified arguments.
// return fn.apply(this, args.concat(slice.call(arguments, 0)));
// };
// }