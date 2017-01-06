var level = require('level');
module.exports = function (dir, date, callback) {
  var db = level(dir);
  var tweets = [];

  db.createReadStream({ gte: date,lte: date+"\xff" })
    .on('data', function (data) {
      tweets.push(data.value);
    })
    .on('error', function (err) {
      callback(err , null);
    })
    .on('end', function () {
      db.close(function (err) {
        callback(err, tweets)
      })
    })
}
