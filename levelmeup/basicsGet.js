// Write a module with one argument that opens a LevelDB data-store using
// level.
//
// The store will contain up to 10 entries with keys in the form:
//
//    key[X]
//
// Where '[X]' is an integer between 0 and 100.
//
// You must find those entries and return them in the callback as an, ordered
// by '[X]', ascending. Your module could look like:
var level = require('level');
module.exports = function (databaseDir, callback) {

  var db = level(databaseDir);
  var result = [];


function get(id,next){
  db.get('key'+id, function (error, value) {
    debugger;
    if(!error){
      result.push(value);
      next(id);
    }
    else{
      if(!error.notFound)
        callback(error,result);
      else
        next(id);
    }
  });
}
var next = function next(id){
  debugger;
  if(id<100){
    get(++id,next);
  }
  else{
    db.close(err => callback(null, result));

  }
}
debugger;
next(-1);

}


// var level = require('level')
//
//     module.exports = function (databaseDir, callback) {
//       var db = level(databaseDir)
//       var error
//       db.on('error', function (err) {
//         error = err
//       })
//       var result = []
//
//       var fetchNext = function fetchNext (i) {
//         var key = 'key' + i
//         db.get(key, function (err, value) {
//           if (err) {
//             if (!err.notFound) {
//               error = err
//             }
//           } else {
//             result.push(value)
//           }
//
//           if (i < 100 && !error) {
//             fetchNext(i + 1)
//           } else {
//             db.close(function (err) {
//               callback(error || err, result)
//             })
//           }
//         })
//       }
//       fetchNext(0)
//     }
//
