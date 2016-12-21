// Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured 
// in the array. Return the object directly (no need to console.log).



    function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }

    module.exports = countWords






// ## Example

//     var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

//     console.log(countWords(inputWords))

//     // =>
//     // {
//     //   Apple: 2,
//     //   Banana: 1,
//     //   Durian: 3
//     // }


// var sum = [0, 1, 2, 3].reduce(function(a, b) {
//   return a + b;
// }, 0);
// // sum is 6

// var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) { 
//   return a.concat(b);
// }, []);
// // flattened is [0, 1, 2, 3, 4, 5]


