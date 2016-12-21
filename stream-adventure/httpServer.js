var through = require('through2');
var http = require('http');

    var server = http.createServer(function (req, res) {
        if (req.method === 'POST') {
            req.pipe(through(write, end)).pipe(res);
        }
        else res.end('send me a POST\n');
    });
    server.listen(process.argv[2]);

    

    function write (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
    }
    function end (done) { done(); }




// var http = require('http');
//     var fs = require('fs');
//     var server = http.createServer(function (req, res) {
//         if (req.method === 'POST') {
//             req.pipe(fs.createWriteStream('post.txt'));
//         }
//         res.end('beep boop\n');
//     });
//     server.listen(process.argv[2]);

// You can test this post server with curl:

//     $ node server.js 8000 &
//     $ echo hack the planet | curl -d@- http://localhost:8000
//     beep boop
//     $ cat post.txt
//     hack the planet