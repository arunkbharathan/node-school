// Write a module that returns true only when:
//   the first character is not a digit
//   and the second character is not a capital letter.



module.exports = function (str) {
  /* return whether str begins with the string "LITERALLY" */
  return /[\D][^A-Z]/.test(str);
}



// * \d - [0-9]        any digit
// * \w - [A-Za-z_]    word character
// * \s - [ \t\r\n\f]  whitespace
//
// Capitalize the shortcut escape characters to negate them:
//
// * \D - [^0-9]        not a digit
// * \W - [^A-Za-z_]    not a word character
// * \S - [^ \t\r\n\f]  not whitespace
