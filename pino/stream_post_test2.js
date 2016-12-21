//Load the request module
var fs = require('fs');
const zlib = require('zlib');

var pump = require('pump');
var sink = fs.createWriteStream('local.log');
var GrowingFile = require('growing-file');
var http = require('http');
var file = GrowingFile.open('local.log', 

{
    timeout: 3000,
    interval: 500,
    startFromEnd: false
}
);

pump(process.stdin,  sink, (err) => {
 	console.log(err)
 });



var sendData = function (){
	clearInterval(int);
var options = {
  host: '192.168.225.36',
  path: '/',
  //since we are listening on a custom port, we need to specify it by hand
  port: '15080',
  //This is what changes the request to a POST request
  method: 'POST'
};
callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
//Load fs module
var gzip = zlib.Deflate();


pump(file, gzip, req, (err) => {
	console.log("http}{"+err);
	int = setTimeout(sendData, 5000);
});
var length=0;
 file.on('data', (chunk) => {

length+=chunk.length;
   console.log(`Sent ${chunk.length} bytes of data.`);
 });

 file.on('end', () => {
 	console.log(length+' bytes');
 	console.log('End of Data.'); });
}

var int = setTimeout(sendData, 1000);


process.on('uncaughtException',(err)=>{console.log(err)});
