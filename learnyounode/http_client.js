var http = require('http');

var argv = process.argv[2];
//console.log(argv)

http.get(argv, function(response){
	response.setEncoding('utf8');

	response.on('data',console.log);

	response.on('end',function(end){
		//console.log(end);
	});

	response.on('error',function(err){
		console.error(err);
	}).on('error',console.error)
});