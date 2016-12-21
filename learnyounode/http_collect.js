var bl = require('bl');
var http = require('http');

http.get(process.argv[2],function(res){
	res.pipe(bl(function(err,data){
		data = data.toString()
		len = data.length
				console.log(len);
		console.log(data);

	}));
})