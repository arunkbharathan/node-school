// const dnode = require('dnode');

// const d = dnode.connect(20000);

// d.on('remote',  remote => {
// 	debugger;
//     remote.transform('beep',  s => {
//     	debugger;
//         console.log('beep => ' + s);
//         d.end();
//     });
// });


var dnode = require('dnode');
var net = require('net');

var d = dnode();
d.on('remote', function (remote) {
    remote.transform('beep', function (s) {
        console.log('beep => ' + s);
        d.end();
    });
});

var c = net.connect(5004);
c.pipe(d).pipe(c);