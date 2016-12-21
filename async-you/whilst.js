// Write a program that will receive a single command line argument to a URL.
// Using async.whilst and http.get, send GET requests to this URL until
// the response body contains the string "meerkat".
// console.log the amount of GET requests needed to retrieve the "meerkat" string.


const url = process.argv[2]
const http = require('http')
      , async = require('async');

      let body = '';
      let count = 0;

      async.whilst(
          function () { return  body.trim() !== "meerkat"; },
          function (callback) {
              count++;
              setImmediate(fetchUrl,callback);
          },
          function (err, n) {
              // 5 seconds have passed, n = 5
              console.log(n);
          }
      );


      function fetchUrl(done){

        http.get(url, function(res){
          res.on('data', function(chunk){
            //console.log(chunk.toString());
            body += chunk.toString();
          });
          res.on('end', function(){
            //console.log(body);
            done(null, count);
          });
        }).on('error', function(err) {
          done(err);
        });
      }



      // var http = require('http')
      //   , async = require('async');
      //
      // var requestBody = '';
      //
      // var count = 0;
      //
      // async.whilst(
      //   function() {
      //     return !/meerkat/.test(requestBody.trim());
      //   },
      //
      //   function(done){
      //     var body = '';
      //     http.get(process.argv[2], function(res){
      //       res.on('data', function(chunk){
      //         body += chunk.toString();
      //       });
      //
      //       res.on('end', function(){
      //         ++count;
      //         requestBody = body;
      //         done();
      //       });
      //     }).on('error', done);
      //   },
      //
      //   function(err){
      //     if (err) return console.log(err);
      //     console.log(count);
      //   }
      // )
