let FizzBuzz = function*(){
  let count = 0;
  let max = +process.argv[2];
  while (true) {
    count++;
    if(count > max) break;
    else if(!(count%15)) yield "FizzBuzz";
    else if(!(count%5)) yield "Buzz";
    else if(!(count%3)) yield "Fizz";
    else yield count;
  }
}();

for(let n of FizzBuzz){
  console.log(n);
}
