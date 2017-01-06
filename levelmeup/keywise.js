let level = require('level');
let JSONPath = require('jsonpath-plus');
module.exports = function (dir, path, callback) {
  let db = level(dir, { valueEncoding: 'json' });
  let data = require(path);
  let batched = data.map( x =>  ({type: 'put', key:(x.user? x.user + '!' + x.name:x.name), value:x}) );
  db.batch(batched, function(err){
    db.close(err => callback(err));
  });
}
