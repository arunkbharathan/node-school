// Here we will learn how to search for documents.

// In this exercise the database name is learnyoumongo.
// So, the url would be something like: mongodb://localhost:27017/learnyoumongo

// Use the parrots collection to find all documents where age
// is greater than the first argument passed to your script.

// Using console.log, print the documents to stdout.


    var mongo = require('mongodb').MongoClient;
    var  assert = require('assert');
    url = "mongodb://localhost:27017/learnyoumongo";

    mongo.connect(url, function(err, db) {
      // db gives access to the database
      assert.equal(null,err);
      //console.log("Connected correctly to server");

      var collection = db.collection('parrots');

      collection.find({ }).toArray(function(err, documents) {
      	assert.equal(null,err);
      	var filtered = documents.filter(isBigEnough);
      	console.log(filtered);
      	});

      db.close();
      });


function isBigEnough(value) {
  return value.age > Number(process.argv[2]);
}




    // var mongo = require('mongodb').MongoClient
    // var age = process.argv[2]

    // var url = 'mongodb://localhost:27017/learnyoumongo'

    // mongo.connect(url, function(err, db) {
    //   if (err) throw err
    //   var parrots = db.collection('parrots')
    //   parrots.find({
    //     age: {
    //       $gt: +age
    //     }
    //   }).toArray(function(err, docs) {
    //     if (err) throw err
    //     console.log(docs)
    //     db.close()
    //   })
    // })