var level = require('level');

module.exports = function (databaseDir, obj, callback) {
   // your code...
      let cnt = 0;
     var db = level(databaseDir);
     for(let key in obj){
       db.put(key, obj[key], function (err) {
         if (err) {
           return callback(error)
         }
         else{
           cnt++;
           if(Object.keys(obj).length === cnt)
            callback(null);
         }
       });
     }



 }



     // 
    //  var level = require('level')
     //
    //  module.exports = function (databaseDir, obj, callback) {
    //    var db = level(databaseDir)
    //    var error
     //
    //    for (var key in obj) {
    //      db.put(key, obj[key])
    //    }
    //    db.on('error', function (err) {
    //      error = err
    //    })
    //    db.close(function (err) {
    //      callback(error || err)
    //    })
    //  }
