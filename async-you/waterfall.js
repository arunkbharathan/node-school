// In this problem you will need to write a program that first reads the contents
// of a file.
// The path will be provided as the first command-line argument to your program
// (i.e. process.argv[2]).
// The file will contain a single URL. Using http.get, create a GET request to
// this URL and console.log the response body.

const fs = require('fs')
  , async = require('async');
const http = require('http');

async.waterfall([
  function(done){
    // response is JSON encoded object like the following {port: 3132}
    fs.readFile(process.argv[2], 'utf8', (err,data) => {
      if(err) done(err);
      done(null,data);
    });
  },

  function(data, done){
    let body = '';
    http.get(data.trimRight(), function(res){
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
], function(err, result){
  if (err) return console.error(err);
  console.log(result);
});
