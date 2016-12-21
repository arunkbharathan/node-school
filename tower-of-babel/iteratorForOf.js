const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
      let count = 0;
    return{
      next(){
        ++count;
        if(count > max) return {done:true};
        else if(!(count%15)) return {done:false, value:"FizzBuzz"};
        else if(!(count%5)) return {done:false, value:"Buzz"};
        else if(!(count%3)) return {done:false, value:"Fizz"};
        else return {done:false, value:count};
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
