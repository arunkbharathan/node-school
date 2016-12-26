// Write a program that acts like a light switch to turn an LED on and off.
//
//  » Attach a button to pin 5 and an LED to pin 9
//  » Use the Button class to detect press events and toggle your LED on/off
//
// ## Circuit diagram
//
//                330      LED
//    Pin 9  o---/\/\/------>|------
//                                 |
//    Pin 5  o------------         |
//                       |         |
//                10k    |         |
//       +5  o---/\/\/---.         |
//                       |         |
//                       |         |
//          .---------.  |         |
//          |         |  |         |
//         -+-_______-+--+         |
//          |    |    |            |
//         -+-___|___-+--+         |
//          |    |    |  |         |
//          '____|____'  |         |
//               |       |         |
//            Button     |         |
//                       +---------+---o  GND

var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {

  // Your solution here!
  var led = new five.Led(9);
  // Create a new `button` hardware instance.
var button = new five.Button(5);


button.on("press", function() {
  led.toggle();
});

});
