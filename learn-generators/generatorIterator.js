// Write a generator function factorial that, given an input number, starts at 1 and goes
// up to the number, yielding the factorial of each number along the way.
// Don't use recursion. Use a loop.
// Follow this boilerplate:

    function *factorial(n){
      // your code here
      let count = 1;
      let mul = 1;
      while(count <= n){
        mul *= count;
        yield mul;
        count++;
      }
    }

    for (var n of factorial(5)) {
      console.log(n)
    }
    // 1, 2, 6, 24, 120


    // function *factorial (n) {
    //    var result = 1;
    //    for (var i = 1; i <= n; i++) {
    //      result *= i;
    //      yield result;
    //    }
    //  }
    //
    //  for (var n of factorial(5)) {
    //    console.log(n)
    //  }
