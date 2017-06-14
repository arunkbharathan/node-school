var Worker = require('webworker-threads').Worker;
// var w = new Worker('worker.js'); // Standard API

// You may also pass in a function:
var worker = new Worker(function(){
  postMessage("I'm working before postMessage('ali').");
  this.onmessage = function(event) {
    postMessage('Hi ' + event.data);
    self.close();
  };
});
worker.onmessage = function(event) {
  console.log("Worker said : " + event.data);
};
worker.postMessage('ali');

// var Worker = require('webworker-threads').Worker;
// require('http').createServer(function (req,res) {
//   var fibo = new Worker(function() {
//     function fibo (n) {
//       return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
//     }
//     this.onmessage = function (event) {
//       postMessage(fibo(event.data));
//     }
//   });
//   fibo.onmessage = function (event) {
//     res.end('fib(40) = ' + event.data);
//   };
//   fibo.postMessage(40);
// }).listen(port);
