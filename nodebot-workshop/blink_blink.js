var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {

  // Your solution here!
  var led = new five.Led(13);
  led.strobe(1000);

});



//             330     LED
// Pin 13 o--/\/\/---->|------o GND
