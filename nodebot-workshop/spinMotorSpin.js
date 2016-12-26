// ## Circuit diagram
//
//                          ----o  GND
//                          |
//                 330    |>
//     Pin 9  o---/\/\/---|  Transistor
//                        |\
//                          |
//                          |
//                    ------.
//                    |     |
//                    |     _
//                    |    / \
//             Diode  v   ( o )  Motor
//                    -    \_/
//                    |     |
//                    |     |
//        +5  o-------.------
// Attach a motor to pin 9 and start it spinning!
//
//  » Spin the motor at 200 mph
//  » Use board.wait to stop the motor spinning after 2 seconds
//  » Start it spinning again after another second
//  » Ensure this loop repeats infinitely
//
// Hint: You could use the motor start and stop events to stop/start the
// motor.


var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function () {
  var motor = new five.Motor(9);
  motor.on('start', () => {
    board.wait(2000, () => motor.stop());
  });
  motor.on('stop', () => {
    board.wait(1000, () => motor.start(200));
  });
  motor.start(200);
});
