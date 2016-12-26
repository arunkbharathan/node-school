// Build a street lamp that turns on as it gets dark.
//
//  » Use photoresistor and an LED
//  » Connect the photoresistor to A0 and the LED to 9
//  » Make the LED turn on when the photoresistor's value is greater than 600
//
// ## Circuit diagram
//
//                PhotoR     10K
//         +5 o---/\/\/--.--/\/\/--.--o GND
//                       |         |
//     Pin A0 o-----------         |
//                                 |
//                330     LED      |
//      Pin 9 o--/\/\/----->|-------

var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {

  // Your solution here!
  var led = new five.Led(9);
  var ldr = new five.Sensor({
    pin: "A0",
    type:"analog",
  });

  ldr.on("change", function() {
    if(this.value < 600)
      led.off();
    else {
      led.on();
    }
});

});
