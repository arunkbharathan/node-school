// Make a remote control robot arm
//
// Use a rotary potentiometer (pot) to control the position of a servo.
//
//  » Attach a potentiometer to pin A2
//  » Attach a servo to pin 9
//  » Have the servo rotate as the potentiometer is turned
//
// ## Circuit diagram
//
//             Servo
//             .---.
//             | | |
//           -===+===-
//             | | |
//             |   |
//             '---'
//             | | |
//             | | |
//             | | ------------------o  Pin 9
//             | |
//             | ----------------.---o  +5
//             |                 |
//             |  Potentiometer  |
//    GND  o---.------/\/\/------.
//                       ^
//                       |
//                       |
//     A2  o--------------

var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {

  // Your solution here!
  var servo = new five.Servo(9);
  var pot = new five.Sensor({
    pin: "A2",
    type:"analog",
  });

  pot.on("change", function() {
    servo.to(pot.scaleTo(0, 179));
});

});



// pot.on('change', function () {
//   var position = five.Fn.map(this.value,
//     0, 1023,
//     0,  179
//   )
//
//   servo.to(position)
// })
