var test = require('tape');
var repeatCallback = require(process.argv[2] || "./metatest.js");

test('repeatCallback', function (t) {
  t.plan(10);
  repeatCallback(10, function () {
    t.pass('callback called');
  });
});
