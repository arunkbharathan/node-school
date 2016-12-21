// Write a function filterForNumbers(iterable) which extracts only the numeric
// values from iterable, returning those values as an Array. iterable could be
// any built-in Iterable, or a custom Iterable exposing an Iterator via the key
// Symbol.iterator.
//
// Copy this boilerplate to a new file and complete with your solution, then
// execute esnext-generation verify <your-file.js> to verify it.

    module.exports = function filterForNumbers(iterable) {
      // loop over iterable, adding numeric values to a new array
      // then return the new array of numbers
      let arr = [];
      for(let x of iterable)
      {
        if(typeof x === 'number')
          arr.push(x);
      }
      return arr;
    }
