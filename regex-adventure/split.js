// Write a module that accepts a string as its argument and returns an array that
// splits the string on commas separated by arbitrary amounts of whitespace.


//Remember that `\s` is a shortcut for whitespace characters `[ \t\r\n\f]`.


module.exports = function (str) {
  /* return whether str begins with the string "LITERALLY" */
  return str.split(/\s*,\s*/);
}
