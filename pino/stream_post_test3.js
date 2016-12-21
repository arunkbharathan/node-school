'use strict'
var http = require('http');
var bl = require('bl');
var fs = require("fs");
var os = require('os');
var async = require('async');
const zlib = require('zlib');
var pump = require('pump');
var GrowingFile = require('growing-file');
var sink = fs.createWriteStream('local.log');

var interval = undefined;
var netConnected = undefined;
var options = { host: '192.168.1.21', path: '/', port: '5001', method: 'GET' };

pump(process.stdin,  sink, (err) => { console.log(err) });

 function get() {
	var inFunc = function(){
				        	options.method = 'GET';
		        	options.path = '/';
		        	options.port = '5001';
		        	options.headers =  { 'from': os.hostname() };
		var req = http.get(options, function(response) {
		        // Continuously update stream with 

		        console.log("in GET")
		        response.pipe(bl ((err,data) => {
		        	netConnected = data.toString();
		        	console.log(netConnected);
		        	clearInterval(interval);
		        }));
		        response.on('error', (err) => {console.log(`GET\n{err}`)});
		        response.on('end', () => {post();})
		    });
		req.on('error', function(e) {
			console.log('problem with request: ' + e.message + ' retrying');
	});
  }
  console.log("inFunc calling get")
	setImmediate(inFunc);
	var interval = setInterval(inFunc,5000);
}


	var onPost = function(response) {
		var str = ''
		response.on('data', function (chunk) {
			str += chunk;
			});
		response.on('end', function () {
			console.log(str);
			});
	}

function post() {
	options.method = 'POST';
	options.path = '/';
	options.port = '5000';
	options.headers =  { 'from': os.hostname() };
	var gzip = zlib.Deflate();
	var req = http.request(options, onPost);
	var file = GrowingFile.open('local.log',{ timeout: 10000, interval: 1000, startFromEnd: false });
	console.log("pump start")
	pump(file,  gzip,req, (err) => {
		//console.log("http}{"+err);
		console.log("pump error")
		
	});

req.on('error', function(e) {
			console.log('problem with request: ' + e.message + ' retrying');
			console.log("Post error calling GET");get();
		});
	file.on('data', (chunk) => {
		console.log(`Sent ${chunk.length} bytes of data.`);
		});

    
}   

get();

process.on('uncaughtException',(err)=>{console.log(err)});