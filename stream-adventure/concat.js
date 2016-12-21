var concat = require('concat-stream');
var split = require('split');

process.stdin.pipe(concat( (body) =>  {
    process.stdout.write(body.toString().split('').reverse().join('') );
}));

    // var http = require('http');

    // var server = http.createServer(function (req, res) {
    //     if (req.method === 'POST') {
    //         req.pipe(concat(function (body) {
    //             var obj = JSON.parse(body);
    //             res.end(Object.keys(obj).join('\n'));
    //         }));
    //     }
    //     else res.end();
    // });
    // server.listen(5000);