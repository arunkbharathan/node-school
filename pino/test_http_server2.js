    var http = require('http');
    var fs = require('fs');
    const zlib = require('zlib');
    //var stream = require("stream");
    //var bl = require('bl');
    
    var pump = require('pump');
var length=0;
var sink=fs.createWriteStream('receive.log');
   var server = http.createServer(function (req, res) {
        //if (req.method === 'POST') {
        	//req.on("data",function(data){
        	//	console.log(Buffer(data).toString());
        	//})
            //req.pipe(gunzip).pipe(fs.createWriteStream('receive.log'));
            var gunzip = zlib.Inflate();

            pump(req, gunzip, sink,
                function(err) {
                    if(err)
                        {console.log('PIPE ERROR\n', err);return}
                });

            sink.on('error', (err) => { "FILE ERROR \n"+  console.log(err); });
             req.on('data', (chunk) => {
                length+=chunk.length;
                 console.log(`Received ${chunk.length} bytes of data.`);})

            // // req.pipe(bl(function (err, data) { 
            // //         fs.writeFile('receive.log', data,  function(err) {
            // //         if (err) {
            // //             return console.log(err);
            // //             }}); }));
            gunzip.on('error', (err) => {console.log("ZIP ERROR\n"+err)});

             req.on('end', () => {
                console.log(length+' bytes');
                console.log(`End of Data`);})
             req.on('error', (err) => {"HTTP ERROR \n"+console.log(err);})
            // req.on('drain', () => {console.log(`DRAIN`);})
        
        });
 var serverGet = http.createServer(function (req, res) {
                if(req.method == 'GET')
                    res.end('ok');
 });
    server.listen(5000);
    
serverGet.listen(5001);
 // setTimeout(function() {
  //  sink.destroy() // when dest is closed pump will destroy source 
 // }, 5000)


