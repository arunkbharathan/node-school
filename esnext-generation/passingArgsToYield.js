module.exports = function *multiplier() {
  let num = 0,
      mul = false;

  while(true) {
    num += 1;

    if (mul) {
      mul = yield num*mul;
    }
    else{
      mul = yield num;
    }
  }
}
