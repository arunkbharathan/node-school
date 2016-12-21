// Here we are going to update a document in the users collection.
// The database name will be accessible via process.argv[2].
// Say we have a user defined like:
//     {
//       "name": "Tina",
//       "age": 30,
//       "username": "tinatime"
//     }
// We want to change Tina's age from 30 to 40.
// For the purpose of this lesson, assume that the username property is unique.


var dbname = process.argv[2];
var mongo = require('mongodb').MongoClient

    var url = 'mongodb://localhost:27017/'+dbname;
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var collection = db.collection('users');
      collection.update({
      username: "tinatime"
    }, {
      $set: {
        age: 40
      }
    }, function(err,result){
    	if(err) throw err;
    	//console.log(result);
    });
      db.close();
    })





    // // document
    // // { a: 2, b: 3 }

    // collection.update({
    //   a: 2
    // }, {
    //   $set: {
    //     b: 1
    //   }
    // }, callback)

    // // document was updated
    // // { a: 2, b: 1 }