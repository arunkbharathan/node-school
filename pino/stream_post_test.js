//Load the request module
var request = require('request');
//Load fs module
var fs = require('fs');
const zlib = require('zlib');
//Lets define a read stream from our source file, it could be any JSON file.
var source = fs.createReadStream('./send2.log');
//Let’s send our data via POST request
var gzip = zlib.createGzip();
var pump = require('pump');
var sink = request.post('http://192.168.225.36:15000/');
var sink2 = fs.createWriteStream('./no_net.log');

//source.pipe(gzip).pipe(request.post('http://192.168.1.14:15000/'));

pump(source,  sink,
	function(err) {
		if(err){
			console.log('PIPE ERROR\n', err);
			pump(source,sink2);
		}
});

sink.on('error', (err) => {console.log("HTTP ERROR \n"+err)});


var length=0;
 source.on('data', (chunk) => {
// 	//var stream = require("stream")
// 	//var a = new stream.PassThrough()
// 	//a.write(chunk)
// 	//a.end()
// 	//a.pipe(request.post('http://127.0.0.1:15684/'))
length+=chunk.length;
   console.log(`Sent ${chunk.length} bytes of data.`);
 });

 source.on('end', () => {
 	console.log(length+' bytes');
 	console.log('End of Data.'); });
 source.on('error', (err) => { "FILE ERROR\n"+  console.log(err); });

 gzip.on('error', (err) => {console.log("ZIP ERROR\n"+err)});
// source.on('drain', () => {
//   console.log('Drained');
// });
sink2.on('finish', () => {console.log("Written to local\n")})

 sink2.on('error', (chunk) => {
// 	//var stream = require("stream")
// 	//var a = new stream.PassThrough()
// 	//a.write(chunk)
// 	//a.end()
// 	//a.pipe(request.post('http://127.0.0.1:15684/'))
   console.log(`Written ${chunk.length} bytes of data.`);
 });

// setTimeout(function() {
//   source.destroy() // when dest is closed pump will destroy source 
// }, 1000)