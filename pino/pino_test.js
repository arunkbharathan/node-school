#!/usr/bin/env node
'use strict'

var pino = require('pino');
var fs = require("fs");
var argv = require('yargs').argv
var app = require('express') ()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
var jsonParser = (bodyParser.json())
app.use(jsonParser)

var server  = argv.server? true:false


var sensorLogger = pino({
  name: 'sensor',
  extreme:true
}, fs.createWriteStream("./sensor.log"))

var debugLogger = pino({
  name: 'debug',
  extreme: true,
},fs.createWriteStream("./debug.log"))

function test() {

	debugLogger.info('This should not be logged');
	sensorLogger.info('hello world');
	sensorLogger.error('this is at error level');
	sensorLogger.info('the answer is %d', 42);
	sensorLogger.info({ obj: 42 }, 'hello world');
	sensorLogger.info({ obj: 42, b: 2 }, 'hello world');
	sensorLogger.info({ obj: { aa: 'bbb' } }, 'another');
	setImmediate(function () {
	  sensorLogger.info('after setImmediate');
	})
	sensorLogger.error(new Error('an error'));

	var child = sensorLogger.child({ a: 'property' });
	child.info('hello child!');

	var childsChild = child.child({ another: 'property' });
	childsChild.info('hello baby..');

 }


 
 //setTimeout(function(){clearInterval(interval);}, 10000);




app.post('/log', function(req, res) {
    if(!req.body.hasOwnProperty('user_id') || 
       	!req.body.hasOwnProperty('log')) {
	    res.statusCode = 400
	    return res.send('Error 400: Post syntax incorrect.')
	}
    var user_id = req.body.user_id
    var log = req.body.log
    fs.appendFile(user_id+'.log', log, function (err){
	if (err)
	    throw err
	//console.log('saved successfully')
	
	res.end("success",200)
    })
    //console.log("post finished.")
 
})

if(server)
{
	console.log("Server Listening")
	debugLogger.info('Server start');
	app.listen(5000)
	

}
else
{
	console.log("client ready")
	debugLogger.info('Client start');
	var interval = setInterval(test,1000);
}