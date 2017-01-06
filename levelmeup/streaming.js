var level = require('level');
var through = require('through2').obj;

module.exports = function (databaseDir) {

  var input = through(write, end);

  var db = level(databaseDir);
  var resultStream =  db.createReadStream().pipe(input);

  function write (buffer, encoding, next) {
  	this.push(buffer.key+'='+buffer.value);
  	next();
  }

  function end (done) {
  	db.close(done);
  }
  // your code...
return resultStream;
}




    // 
    // var level = require('level')
    // var through2 = require('through2')
    //
    // module.exports = function (databaseDir) {
    //   var db = level(databaseDir)
    //   return db.createReadStream()
    //     .pipe(through2({objectMode: true}, function (data, enc, next) {
    //       this.push(data.key + '=' + data.value)
    //       next()
    //     }, function (next) {
    //       db.close(next)
    //     }))
    // }
