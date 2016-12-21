// An encrypted, gzipped tar file will be piped in on process.stdin. To beat this
// challenge, for each file in the tar input, print a hex-encoded md5 hash of the
// file contents followed by a single space followed by the filename, then a
// newline.
var zlib = require('zlib');
var tar = require('tar');
var bl = require('bl');
cipher_name = process.argv[2]; 
cipher_passphrase = process.argv[3];
var gunzip = zlib.createGunzip();
var parser = tar.Parse();
var fs = require('fs');
var crypto = require('crypto');

var decipherStream = crypto.createDecipher(cipher_name, cipher_passphrase);


parser.on('entry', function (e) {
	
	if(e.type != 'File') return;
		
	var hashStream = crypto.createHash('md5', { encoding: 'hex' });
	e.pipe(hashStream).pipe(bl(function(err,data){
		console.log(data+' '+e.path);
	}));



    });





process.stdin.pipe(decipherStream ).pipe(gunzip).pipe(parser);




process.on('uncaughtException', (err) => {
  console.log( `Caught exception: ${err}`);
});



// // Here's the reference solution:

//   var crypto = require('crypto');
//   var tar = require('tar');
//   var zlib = require('zlib');
//   var concat = require('concat-stream');

//   var parser = tar.Parse();
//   parser.on('entry', function (e) {
//       if (e.type !== 'File') return;

//       var h = crypto.createHash('md5', { encoding: 'hex' });
//       e.pipe(h).pipe(concat(function (hash) {
//           console.log(hash + ' ' + e.path);
//       }));
//   });

//   var cipher = process.argv[2];
//   var pw = process.argv[3];
//   process.stdin
//       .pipe(crypto.createDecipher(cipher, pw))
//       .pipe(zlib.createGunzip())
//       .pipe(parser)
//   ;