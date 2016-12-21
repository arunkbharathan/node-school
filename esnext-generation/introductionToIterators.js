module.exports = function makeCounter(someObj, maxNum = 10) {
let x=1;
  someObj.next = function() {
    // complete me
    if(x<=maxNum)
    {
      //console.log(x)
      return {value:x++, done: false};
    }
    return {done:true};
  }


}
