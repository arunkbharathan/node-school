//  Write a program that opens a level directory and reads a key from it.
var level = require('level');

module.exports = function (databaseDir, key, callback) {
  // your code...
  var db = level(databaseDir);
  db.get(key, function (error, value) {
    db.close(function (err) {
      callback(error || err, value);
    });
  });
};
