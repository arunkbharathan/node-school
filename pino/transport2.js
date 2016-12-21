'use strict'

const split = require('split2')
const pump = require('pump')
const through = require('through2')
const fs = require("fs");
const BufferList = require('bl')
const request = require('request');
 
var bl = new BufferList()

var timeStep = 5000;
var interval = setInterval(timeouthttpsend,timeStep);

var myTransport = through.obj(function (chunk, enc, cb) {
  // do whatever you want here!
  bl.append(new Buffer(String(chunk)));

  

  if(bl.length > 40*1024)
  {
  	clearInterval(interval);
  	console.log("send 40 kb")
  	request.post('http://127.0.0.1:5000/log', {form:{user_id:'arun', log:bl.toString('ascii')}}, function(err,httpResponse,body){ 
  		if(err)
  			console.log(err)
  		else
  			bl = new BufferList()
  		});
  	interval = setInterval(timeouthttpsend,timeStep);

  }

  fs.writeFile('sensor.log', chunk, {encoding:'utf8',mode:0o777,flag:'a'}, function(err) {
  	if (err) {
  		return console.log(err);
  		}
  	});

  cb()
})

pump(process.stdin,  myTransport)


function timeouthttpsend()
{
	console.log('timeout send');
	request.post('http://127.0.0.1:5000/log', {form:{user_id:'arun', log:bl.toString('ascii')}}, function(err,httpResponse,body){ 
         	if(err)
         		console.log(err)
         	else
         		bl = new BufferList()
         });

}