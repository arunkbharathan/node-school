// Write generator-function flat that takes nested array inside and flattens it.
// Follow this boilerplate:

    function *flat (arr) {
      // your code goes here
      debugger;
        let len = arr.length;
        let i = 0;
        while(i < len)
        {debugger;
          //console.log(i,"#",len,"#",arr)
          if(Array.isArray(arr[i]))
            yield  *flat(arr[i++]);
          else
            yield arr[i++];
        }
    }

    var A = [1, [2, [3, 4], 5], 6];
    for (var f of flat(A)) {
        console.log( f );
    }
    // 1 2 3 4 5 6


    // function *flat (arr) {
    //   if (Array.isArray(arr)) {
    //     for (var i = 0; i < arr.length; i++) {
    //       yield* flat(arr[i]);
    //     }
    //   } else {
    //     yield arr;
    //   }
    // }
    //
    // var A = [1, [2, [3, 4], 5], 6];
    // for (var f of flat(A)) {
    //     console.log( f );
    // }
    // // 1 2 3 4 5 6
