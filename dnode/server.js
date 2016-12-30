// const dnode = require('dnode');
// const server = dnode({
// 	transform : function (s, cb) {
// 		console.log('IN');
// 		cb(s.replace(/[aeiou]{2,}/, 'oo').toUpperCase());
// 	}
// });

// server.listen(20000);


var dnode = require('dnode');
var net = require('net');

var server = net.createServer(function (c) {
    var d = dnode({
        transform : function (s, cb) {
            cb(s.replace(/[aeiou]{2,}/, 'oo').toUpperCase())
        }
    });
    c.pipe(d).pipe(c);
});

server.listen(5004);