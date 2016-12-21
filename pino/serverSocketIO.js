var io = require('socket.io').listen(8010);
var ss = require('socket.io-stream');
var path = require('path');
var pump = require('pump');
const zlib = require('zlib');
options = { 'flags': 'w'
, 'encoding': null
, 'mode': 0666
}
var totlen=0;
var fs = require('fs');
 
io.of('/user').on('connection', function(socket) {
  ss(socket).on('profile-image', function(clientStream, data) {
    var filename = path.basename(data.name);
    var sink = fs.createWriteStream(filename,options);
    var gunzip = zlib.Inflate();
    pump(clientStream,gunzip,sink, (err) => {if(err)console.log("PUMP ERROR: "+err);});
    clientStream.on('data', (data) => {console.log(data.length);totlen+=data.length;});
    clientStream.on('finish', () => {console.log('#'+totlen);});
  });

});



process.on('uncaughtException', (err) => {
  fs.writeSync(1, `Caught exception: ${err}`);
});