    function reduce(arr, fn, initial) {
      // SOLUTION GOES HERE
      
      if(arr.length === 1) return fn(initial, arr[0],0,arr);
      
      var tail = arr.slice(1);
      return reduce(tail,fn,fn(initial,arr[0],0,arr));

    }

    module.exports = reduce





    //    function toUpperArray(items) {
    //    if (!items.length) return []             // end condition
    //    var head = items[0]                      // item to operate on
    //    head = head.toUpperCase()                // perform action
    //    var tail = items.slice(1)                // next
    //    return [head].concat(toUpperArray(tail)) // recursive step
    // }

    // toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']




    // reduce([1,2,3], function(prev, curr, index, arr) {
    //   return prev + curr
    // }, 0)
    // // => 6



    // function reduce(arr, fn, initial) {
    //   return (function reduceOne(index, value) {
    //     if (index > arr.length - 1) return value // end condition
    //     return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    //   })(0, initial) // IIFE. kick off recursion with initial values
    // }

    // module.exports = reduce