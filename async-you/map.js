//Write a program that will receive two command-line arguments to two URLs.
//Using http.get create two GET requests to these URLs.
//You will need to use async.map, then console.log the results array.

var http = require('http')
     , async = require('async');
   async.map(process.argv.slice(2), function(url, done){
     fetchUrl(url,done);
   },
   function(err, results){
     if (err) return console.log(err);
     // results is an array of the response bodies in the same order
     console.log(results);
   });

function fetchUrl(url,done){
  let body = '';
  http.get(url, function(res){
    res.on('data', function(chunk){
      //console.log(chunk.toString());
      body += chunk.toString();
    });
    res.on('end', function(){
      //console.log(body);
      return done(null,body);
    });
  }).on('error', function(err) {
    return done(err);
  });
}
