module.exports = function generate(isEven) {
  // return an Iterator for even numbers if isEven is true
  // or, return an Iterator for odd numbers if isEven is false
  // If `.next(swap)` receives `true`, swap between even <-> odd
  let [O,E] = [1,2];
  return {next: (swap=false) => {
    if(swap === true)
      isEven = !isEven;
    if(isEven){
      O = E + 1;
      E = E + 2;
      return {value:E-2,done:false};
    }else{
      E = O + 1;
      O = O + 2;
      return {value:O-2,done:false};
    }
  }};

}

//if swap switches between true/false infinite positive integer will be generated.

// module.exports = function generate(isEven) {
//    var num;
//
//    if (isEven) {
//      num = 0;
//    } else {
//      num = -1;
//    }
//
//    var myIterator = {
//      next: function(swap) {
//
//        num += (swap ? 1 : 2);
//
//        return {
//          value: num
//        }
//
//      }
//    }
//
//    return myIterator;
//  }
