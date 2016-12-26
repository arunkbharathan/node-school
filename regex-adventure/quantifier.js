// Export a function that takes a filename string as an argument and returns
// whether the entire filename is a sequence of one or more digits followed by
// `.jpg` or `.jpeg`.

module.exports = function (str) {
  /* return whether str begins with the string "LITERALLY" */
  return /^\d+\.jpe?g$/.test(str);
}


// Here are some simple quantifiers:
//
//   *  zero or more times
//   +  one or more times
//   ?  zero or one times
