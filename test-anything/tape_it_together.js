var fancify = require(process.argv[2] || "./metatest.js");
var test = require('tape');

test("Fancify fancifies", function(t){
  t.deepEqual(fancify('Hello'), "~*~Hello~*~", 'Wraps a string in ~*~');
  t.deepEqual(fancify('Hello', true), "~*~HELLO~*~", 'Optionally makes it allcaps');
  t.deepEqual(fancify('Hello', false, "!"), "~!~Hello~!~", 'Optionally makes it allcaps');
  t.deepEqual(fancify('Hello', true, "!"), "~!~HELLO~!~", 'Optionally allows to set the character');
  t.end();
});



// var test = require('tape')
// var fancify = require(process.argv[2])
//
// test('fancify', function (t) {
//   t.equal(fancify('Wat'), '~*~Wat~*~', 'Wraps a string in ~*~')
//   t.equal(fancify('Wat', true), '~*~WAT~*~', 'Optionally makes it allcaps')
//   t.equal(fancify('Wat', false, '%'), '~%~Wat~%~', 'Optionally allows to set the character')
//   t.end()
// })
