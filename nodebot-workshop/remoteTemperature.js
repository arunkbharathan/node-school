// ## Remote Temperature (Exercise 8 of 9)
//
//  Temperature near you as a service.
//
//  Use dnode to create an rpc server that allows anyone to query the last
//  known temperature of a TMP36 temperature sensor.
//
//   » Attach temperature sensor to A0
//   » Install dnode npm install dnode
//   » Setup your dnode server to listen on port 1337
//   » Your rpc endpoint should expose a function called getTemperature
//   » getTemperature should callback with the temperature in celsius
//
// ## Circuit diagram
//
//      +5  o-----.
//                |
//                |
//               __
//              |   \
//      A0  o---|    ) TMP36
//              |__ /
//                |
//                |
//     GND  o-----'

var dnode = require('dnode');
var five = require('johnny-five')
var board = new five.Board();
var celsius = undefined;

var server = dnode({
    getTemperature : function (cb) {
        cb(celsius);
    }
});
server.listen(1337);

board.on("ready", function() {
  var temperature = new five.Thermometer({
    controller: "TMP36",
    pin: "A0"
  });

  temperature.on("change", function() {
    celsius = this.celsius;
  });
});
