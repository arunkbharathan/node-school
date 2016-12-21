// Connect to MongoDB on port 27017.
// You should connect to the database named learnyoumongo and insert
// a document into the docs collection.

// The document should be a json document with the following properties:

//   * `firstName`
//   * `lastName`

// firstName will be passed as the first argument to the lesson.

// lastName will be passed as the second argument to the lesson.

// Use console.log to print out the object used to create the document.

// Make sure you use JSON.stringify convert it to JSON.


var MongoClient = require('mongodb').MongoClient
var assert = require('assert');



var url = 'mongodb://localhost:27017/learnyoumongo';
var putIn = {};
putIn.firstName = process.argv[2];
putIn.lastName = process.argv[3];

console.log(JSON.stringify(putIn));

MongoClient.connect(url,function(err,db){
	assert.equal(null,err);

	var collection = db.collection('docs');
	// inserting document
    // { a : 2 }
    collection.insert(putIn, function(err, data) {
      // handle error
      assert.equal(null,err);
      //console.log(JSON.stringify(data));
      // other operations
    })
    db.close();
});




// var mongo = require('mongodb').MongoClient

//     var firstName = process.argv[2]
//     var lastName = process.argv[3]
//     var doc = {
//       firstName: firstName
//     , lastName: lastName
//     }

//     var url = 'mongodb://localhost:27017/learnyoumongo'
//     mongo.connect(url, function(err, db) {
//       if (err) throw err
//       var collection = db.collection('docs')
//       collection.insert(doc, function(err, data) {
//         if (err) throw err
//         console.log(JSON.stringify(doc))
//         db.close()
//       })
//     })