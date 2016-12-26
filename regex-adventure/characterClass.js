// Write a module that returns true only when the input string starts with a
// lower-case vowel or a digit.

module.exports = function (str) {
  /* return whether str begins with the string "LITERALLY" */
  return /^[aeiou0-9]/.test(str);
}
