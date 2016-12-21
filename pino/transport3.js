var split = require('split2')
var pump = require('pump')
var through = require('through2')
const BufferList = require('bl')
var fs = require('fs');

var source = fs.createReadStream('./send2.log');

var bl = new BufferList();

var myTransport = through.obj(function (chunk, enc, cb) {
  // do whatever you want here!
  //console.log(chunk)
  
  fs.appendFile('logger.log', chunk, (err) => {
  	if (err) throw err;
  	//console.log('The "data to append" was appended to file!');
  });

  cb()
})

pump(source, myTransport, (err) => {
	if(err)
		console.log(err);
});
