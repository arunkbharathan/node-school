// Export a function that takes a string argument and returns whether the string
// ends with a literal `.` (dot).

// Whenever you want to refer to a literal one of these characters, you'll need to
// put a `\` before the character:
//
//   . * + ? [ ] ( ) ^ $ { } | \


module.exports = function (str) {
  /* return whether str begins with the string "LITERALLY" */
  return /\.$/.test(str);
}
