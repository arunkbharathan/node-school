var level = require('level');

module.exports = function (databaseDir, changes, callback) {
  // your code...
  let toBatch = [];

  var db = level(databaseDir);

  changes.del.map(item =>  toBatch.push({type:'del', key:item}));

  for(let key in changes.put){
    toBatch.push({ type: 'put', key: key, value: changes.put[key] });
  }

  db.batch(toBatch, function(err){
    if(err)
      callback(err,0);
    else {
        callback(null,0);
    }
  });

}

//
// var level = require('level')
//
// module.exports = function (databaseDir, changes, callback) {
//   var db = level(databaseDir)
//   var error
//   db.on('error', function (err) {
//     error = err
//   })
//   var ops = changes.del.map(function (key) {
//     return {
//       type: 'del',
//       key: key
//     }
//   }).concat(Object.keys(changes.put).map(function (key) {
//     return {
//       type: 'put',
//       key: key,
//       value: changes.put[key]
//     }
//   }))
//   db.batch(ops, function (err) {
//     if (err) {
//       error = err
//     }
//     db.close(function (err) {
//       callback(error || err)
//     })
//   })
// }
