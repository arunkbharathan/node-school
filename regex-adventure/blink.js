// Implement a custom markdown operator that will translate all text between
// `@@...@@` and into `<blink>...</blink>` tags.
//
// For example, `@@whatever@@` becomes `<blink>whatever</blink>`.
//
// In addition to the `@@...@@` operator, your code should support existing markdown
// syntax, including inside `@@...@@` operators.
//
// Your code should accept a string of markdown as input and return a string of
// html output. Here's a template that you can use:
var marked = require('marked');
  module.exports = function (str) {
    /* return html string */

    return marked(str).replace(/@@([^\s]*)@@/g,'<blink>$1</blink>');
  }

// For this task, use the `marked` module: `npm install marked`



// var marked = require('marked')
//
// module.exports = function (str) {
//   var md = marked(str)
//   return md.replace(/@@(.+?)@@/g, '<blink>$1</blink>')
// }
