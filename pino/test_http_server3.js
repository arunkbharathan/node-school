var fs = require("fs");
var app = require('express') ()
var bodyParser = require('body-parser')
const zlib = require('zlib');
var pump = require('pump');

app.use(bodyParser.urlencoded({extended: true}))
var jsonParser = (bodyParser.json())
app.use(jsonParser)

app.post('/log', function(req, res) {
	debugger;
	var gunzip = zlib.Inflate();
	var sink=fs.createWriteStream('receive.log');
	req.on('data', (chunk) => {
                console.log(`Received ${chunk.length} bytes of data.`);})
	pump(req,gunzip,  sink,
		function(err) {
			if(err)
				{
					console.log('PIPE ERROR\n', err);
					return;
				}

			});
	req.on('data', (chunk) => {
                console.log(`Received ${chunk.length} bytes of data.`);})
 
});

app.get('/', function(req,res){
	res.end("ok",200)
})

app.listen(5000)