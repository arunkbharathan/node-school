// Next up is aggregation. Aggregation allows one to do things like
// calculate the sum of a field of multiple documents or the average
// of a field of documents meeting particular criteria.

// Say you have a collection named prices. Each price document is modeled
// like so:

//     {
//       "name": "Tshirt",
//       "size": "S",
//       "price": 10,
//       "quantity": 12
//       "meta": {
//         "vendor": "hanes",
//         "location": "US"
//       }
//     }

// In this exercise, we need to calculate the average price for all documents
// in the prices collection in the database named learnyoumongo that have
// the size that will be passed as the first argument to your script.

// Use console.log() to print the average price rounded to 2 decimal places
// to stdout after you have found it.


var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var ofSize = process.argv[2];

    mongo.connect(url, function(err, db) {
      if (err) throw err
      var prices = db.collection('prices');
      prices.aggregate([
      { $match: { size: ofSize }}
    , { $group: {
        _id: 'average' // This can be an arbitrary string in this case
      , average: {
          // $sum is the operator used here
          $avg: '$price'
        }
      }}
    ]).toArray(function(err, results) {
      // handle error
      if(err) throw err;
      console.log(results[0].average.toFixed(2));
      // => [
      // =>   { _id: 'total', total: 11 }
      // => ]
    });    
      db.close();
    });










  //   // [
  //   //  { status: 'A', value: 1 },
  //   //  { status: 'B', value: 2 },
  //   //  { status: 'A', value: 10 }
  //   // ]

  //   collection.aggregate([
  //     { $match: { status: 'A' }}
  //   , { $group: {
  //       _id: 'total' // This can be an arbitrary string in this case
  //     , total: {
  //         // $sum is the operator used here
  //         $sum: '$value'
  //       }
  //     }}
  //   ]).toArray(function(err, results) {
  //     // handle error
  //     console.log(results)
  //     // => [
  //     // =>   { _id: 'total', total: 11 }
  //     // => ]
  //   });


  // * `$avg`
  // * `$first`
  // * `$last`
  // * `$max`
  // * `$min`
  // * `$push`
  // * `$addToSet`



  // var mongo = require('mongodb').MongoClient
  //   var size = process.argv[2]

  //   var url = 'mongodb://localhost:27017/learnyoumongo'

  //   mongo.connect(url, function(err, db) {
  //     if (err) throw err
  //     var prices = db.collection('prices')
  //     prices.aggregate([
  //       { $match: {
  //         size: size
  //       }}
  //     , { $group: {
  //         _id: 'average'
  //       , average: {
  //           $avg: '$price'
  //         }
  //       }}
  //     ]).toArray(function(err, results) {
  //       if (err) throw err
  //       if (!results.length) {
  //         throw new Error('No results found')
  //       }
  //       var o = results[0]
  //       console.log(Number(o.average).toFixed(2))
  //       db.close()
  //     })
  //   })