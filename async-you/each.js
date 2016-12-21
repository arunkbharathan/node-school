// Create a program that will receive two URLs as the first and second command-line
// arguments.
//
// Then using http.get, create two GET requests to these URLs and console.log
// any errors.

var http = require('http')
  , async = require('async');
async.each(process.argv.slice(2), function(url, done){
  fetchUrl(url,done);
},
function(err){
  if (err) console.log(err);
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
      return done(null);
    });
  }).on('error', function(err) {
    return done(err);
  });
}
