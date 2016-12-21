'use strict'
var fs = require("fs");
var argv = require('yargs').argv
var app = require('express') ()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
var jsonParser = (bodyParser.json())
app.use(jsonParser)

var server  = argv.server? true:false

var pino = require('pino')({
  name: 'sensor',
  extreme:true
})




function sample(){

	pino.info('hello world')
	pino.error('this is at error level')
	pino.info('the answer is %d', 42)
	pino.info({ obj: 42 }, 'hello world')
	pino.info({ obj: 42, b: 2 }, 'hello world')
	pino.info({ obj: { aa: 'bbb' } }, 'another')
	setImmediate(function () {
	  pino.info('after setImmediate')
	})
	pino.error(new Error('an error'))

	var child = pino.child({ a: 'property' })
	child.info('hello child!')

	var childsChild = child.child({ another: 'property' })
	childsChild.info('hello baby..')
}




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
	
	app.listen(5000)
	

}
else
{
	console.log("client ready")
	
	var interval = setInterval(sample,10);
}