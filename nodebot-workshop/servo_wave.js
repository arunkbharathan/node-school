// » Create a new Servo instance attached to pin 9
// » Use servo.sweep to rotate between 0˚ and 180˚
// » Use board.wait to schedule a 'reset' callback after 3 seconds
// » The 'reset' callback should stop and center the servo
// » Check the docs to see how to bring it back into line

var five = require('johnny-five')
var board = new five.Board();
board.on('ready', function () {
  var servo = new five.Servo(9);

  servo.sweep()
  // Your solution here!
  this.wait(3000, function() {
  // Turn it off...
  servo.stop();
  servo.center();
});
});


//         Servo
//         .---.
//         | | |
//       -===+===-
//         | | |
//         |   |
//         '---'
//         | | |
//         | | |
// GND  o--. | .--o  Pin 9
//           |
//  +5  o----.
