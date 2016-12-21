var io = require('socket.io-client');
var GrowingFile = require('growing-file');
var pump = require('pump');
var fs = require('fs');
var socket = io.connect('http://192.168.1.21:8010/user');
os = require('os');
var filename = os.hostname() + '.log';
var ss = require('socket.io-stream');
const zlib = require('zlib');
var totlen=0;


sink = fs.createWriteStream('local.log');

var func = function()
{
	
	var serverStream = new ss.createStream();
	//var source = fs.createReadStream("number.log");
	var source = GrowingFile.open('local.log',{ timeout: 10000, interval: 1000, startFromEnd: false });
	var gzip = zlib.Deflate();
	ss(socket).emit('profile-image', serverStream, {name: filename});
	pump(source,gzip,serverStream, (err) => {if(err)console.log("PUMP ERROR: "+ err);});
	source.on('data', (data) => {console.log(data.length);totlen+=data.length;});
	source.on('end', () => {console.log("#"+totlen);});

}


socket.on("reconnect", function () {
    console.log("RECONNECTED!");
    func();
});

socket.on("connect", function () {
    console.log("CONNECTED!");
    //setTimeout(func, 500);
});

socket.on("disconnect", function () {
    console.log("DISCONNECTED!");
});

process.on('uncaughtException', (err) => {
  fs.writeSync(1, `unCaught exception: ${err}`);
});

setImmediate(func);

pump(process.stdin,  sink, (err) => { console.log(err) });

// var fs = require('fs');
// var ttt = fs.createWriteStream('number.log');
// for(var i = 0;i<=4900000;i++)
// 	{ttt.write(String(i)+'\n');
// console.log(i)}
// console.log('finished');