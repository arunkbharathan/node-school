var test = require('tape');
var feedCat = require(process.argv[2] || "./metatest.js");

test('feedCat throw test', function (t) {
  t.plan(3)
  t.equal(feedCat('food'), 'yum')
  t.throws(feedCat.bind(null, 'chocolate'),'Chocolate harmful');
  t.doesNotThrow(() => feedCat('fish'),'fish good');
  debugger;
  t.end();
});


// var test = require('tape')
// var feedCat = require(process.argv[2])
//
// test('cat feeding', function (t) {
//   t.plan(2)
//   t.equal(feedCat('food'), 'yum')
//   t.throws(feedCat.bind(null, 'chocolate'))
// })
