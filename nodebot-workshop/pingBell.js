// Create a UDP server that plays a sound when a message is received.
//
//  » Attach a piezo to pin 8
//  » Use the dgram node module to create a udp4 socket
//  » Bind your server to port 1337 and listen for messages
//  » When a message is received, have the piezo play a tune
//
// ## Circuit diagram
//
//                Piezo
//                  _
//                || ||
//     Pin 8  o---|| ||---o  GND
//                ||_||

const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const five = require("johnny-five");
const  board = new five.Board();

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});



server.on('listening', () => {
  var address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(1337);
// server listening 0.0.0.0:41234


board.on("ready", function() {
  // Creates a piezo object and defines the pin to be used for the signal
  var piezo = new five.Piezo(8);

  server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    piezo.play({
    // song is composed by a string of notes
    // a default beat is set, and the default octave is used
    // any invalid note is read as "no note"
    song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
    beats: 1 / 4,
    tempo: 100
  });

  });

});



// var five = require('johnny-five')
// var dgram = require('dgram')
// var board = new five.Board()
//
// board.on('ready', function () {
//   var piezo = new five.Piezo(8)
//   var server = dgram.createSocket('udp4')
//
//   server.on('message', function () {
//     piezo.tone(five.Piezo.Notes.c4, 1000)
//   })
//
//   server.bind(1337)
// })
