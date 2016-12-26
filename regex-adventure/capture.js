// In this adventure, export a module that searches for the string `x=` followed by
// numbers and returns the number found after the equal sign.

module.exports = function (str) {
  var m = /x=(\d+)/.exec(str)
  return m ? m[1] : null
}
