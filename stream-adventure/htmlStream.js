var trumpet = require('trumpet');
var through2 = require('through2');

    var tr = trumpet();
    var stream2 = through2(write,end);

    process.stdin.pipe(tr).pipe(process.stdout);

    var stream = tr.select('.loud').createStream();

    


    
function write (buffer, encoding, next) {

	this.push(buffer.toString().toUpperCase());
	next();
}

function end (done) {
	done()
}

stream.pipe(stream2).pipe(stream);