// Write a program that will receive two URLs as the first and second command-line arguments.
// Using http.get, create a GET request to these URLs and pass the response body
// to the callback.
// Pass in an object of task functions, using the property names requestOne and
// requestTwo, to async.series.
// console.log the results in the callback for series when all the task functions
// have completed.

const async = require('async')
  , http = require('http');

let url1 = process.argv[2];
let url2 = process.argv[3];

function fetchUrl(url,done){
  let body = '';
  http.get(url, function(res){
    res.on('data', function(chunk){
      //console.log(chunk.toString());
      body += chunk.toString();
    });
    res.on('end', function(){
      //console.log(body);
      done(null, body);
    });
  }).on('error', function(err) {
    done(err);
  });
}

async.series({
  requestOne: function(done){
    fetchUrl(url1,done);
  },
  requestTwo: function(done){
    fetchUrl(url2,done);
  }
}, function(err, results){
  if(err) return console.error(err);
  console.log(results);
  // results will be {one: 1, two: 2}
});
