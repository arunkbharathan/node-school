var level = require('level');

module.exports = function (databaseDir, date, callback) {
    var db = level(databaseDir);
    // .. your code here
    let tweetCount = 0;
     var error;
    db.createReadStream({gte:date})
    .on('data', function (data) {
   // data.key and data.value
   tweetCount++;
 })
 .on('error', function (err) {
  error = err
})
 .on('end', function () {
// data.key and data.value
db.close(function (err) {
        callback(error || err, tweetCount)
      })
});


  }




  // var level = require('level')
  // module.exports = function (dir, date, callback) {
  //   var db = level(dir)
  //   var tweets = 0
  //   var error
  //   db.createReadStream({ gte: date })
  //     .on('data', function (data) {
  //       tweets++
  //     })
  //     .on('error', function (err) {
  //       error = err
  //     })
  //     .on('end', function () {
  //       db.close(function (err) {
  //         callback(error || err, tweets)
  //       })
  //     })
  // }
