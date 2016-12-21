module.exports = function *generate(isEven) {
  // `yield` either odd or even numbers based on `isEven`
  let num = isEven?2:1;
  while(true)
  {
    yield num
    num+=2;
  }
}
