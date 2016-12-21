// Create a promise that after a delay of 300ms, rejects with an Error object.
// The Error object should be constructed with parameter 'REJECTED!', which is
// the textual message of the error.
//
// Create a function onReject to print error.message using console.log. Pass
// this function as a rejection handler to the then method of your promise.
'use strict';

let promise = new Promise(function (fulfill, reject) {
  // Your solution here
  let error = new Error('REJECTED!');
  setTimeout(reject,300,error);
});

promise.then(null, onReject);

function onReject (error) {
  // Your solution here
  console.log(error.message);
}
