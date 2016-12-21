// Write a program that will receive two command line arguments containing
// the hostname and port. Using http.request send a POST request to
//     url + '/users/create'
// with the body containing a JSON.stringify'ed object:
//     {"user_id": 1}
// Do this five times with each time the user_id property being incremented,
// starting at 1.
// Once these requests are done, send a GET request to:
//     url + '/users'
// and console.log the response body for the GET request.

var http = require('http')
      , async = require('async')
      , qs = require('querystring');


async.series({
  post: function(done){
    async.times(5,(n, next) => {postUrl(n,next)},(err, bodies) => {done(null,bodies)});
  },
  get: function(done){
    fetchUrl('http://'+process.argv[2]+':'+process.argv[3]+'/users',done);
  }
}, function(err, results){
  if(err) return console.error(err);
  console.log(results.get);
  // results will be {one: 1, two: 2}
});

   function postUrl(n,done){
     //console.log(n);
     let postdata = JSON.stringify({"user_id": n+1})
      var opts = {
        hostname: process.argv[2],
        path: '/users/create',
        method: 'POST',
        port: +process.argv[3],
        headers: {'Content-Length':postdata.length}
      };
      var body = '';
      var req = http.request(opts, function(res){
        res.on('data', function(chunk){
          body += chunk.toString();
        });
        res.on('end', function(){
         return done(null, body);
        });
      });

      req.write(postdata);
      req.end();

    }

    function fetchUrl(url,done){
      //console.log(url);
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



    //
    // var http = require('http')
    //   , qs = require('querystring')
    //   , async = require('async')
    //   , hostname = process.argv[2]
    //   , port = process.argv[3]
    //   , url = 'http://' +  hostname + ':' + port;
    //
    // async.series({
    //   post: function(done){
    //     async.times(5, function(n, next){
    //       _addUser(++n, function(err){
    //         next(err);
    //       });
    //     }, function(err){
    //       if (err) return done(err);
    //       done(null, 'saved');
    //     });
    //   },
    //
    //   get: function(done){
    //     http.get(url + '/users', function(res){
    //       var body = "";
    //       res.on('data', function(chunk){
    //         body += chunk.toString();
    //       });
    //
    //       res.on('end', function(){
    //         done(null, body);
    //       });
    //     }).on('error', done);
    //   }
    //
    // }, function(err, result){
    //   if (err) return console.log(err);
    //   console.log(result.get);
    // });
    //
    //
    // function _addUser(user_id, cb){
    //   var postdata = JSON.stringify({'user_id': user_id}),
    //   opts = {
    //     hostname: hostname,
    //     port: port,
    //     path: '/users/create',
    //     method: 'POST',
    //     headers: {
    //       'Content-Length': postdata.length
    //     }
    //   };
    //
    //   var req = http.request(opts, function(res){
    //     res.on('data', function(chunk){})
    //
    //     res.on('end', function(){
    //       cb();
    //     });
    //   });
    //
    //   req.on('error', cb);
    //
    //   req.write(postdata);
    //   req.end();
    // }
