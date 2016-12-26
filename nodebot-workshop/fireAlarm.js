// Build a "fire alarm" that sounds when the air temperature is more than
// 50°C.
//
//  » Attach a temperature sensor TMP36 to A0
//  » Attach a piezo to pin 9
//  » Attach an LED to pin 13
//  » Attach a button to pin 5
//  » When the temperature sensor detects a temperature above 50°C the piezo
//    should sound and the LED should flash on and off continuously
//  » If the temperature drops below 50°C the piezo and LED should switch off
//  » If the button is pressed the piezo and LED should turn off and should
//    not turn on again unless the temperature drops below 50°C
//
// ## Circuit diagram
//
//                      330        LED
//    Pin 13  o--------/\/\/-------->|---------
//                                            |
//    Pin 5   o----------------------         |
//                                  |         |
//                           10k    |         |
//       +5   o----.--------/\/\/---.         |
//                 |                |         |
//                 |                |         |
//                 |             .--|--|--.   |
//                 |             | |  |   |   |
//                 |   Button  --+-|  |   |   |
//                 |             | |  |   |   |
//                 |             '--|--|--'   |
//                 |                |         |
//                 |                ----------.---o  GND
//                 __                         |
//                |   \                       |
//        A0  o---|    ) TMP36                |
//                |__ /                       |
//                 |                          |
//                 ---------------------------.
//                                            |
//                         Piezo              |
//                           _                |
//                         || ||              |
//     Pin 9   o-----------|| ||---------------
//                         ||_||

var five = require('johnny-five');
var board = new five.Board();
var isReset = false;

board.on("ready", function() {
  var temperature = new five.Thermometer({
    controller: "TMP36",
    pin: "A0"
  });
  var piezo = new five.Piezo(9);
  var led = new five.Led(13);
  var button = new five.Button(5);

  button.on("press", function() {
    led.stop().off();
    piezo.off();
    isReset = true;
  });

  temperature.on("change", function() {
    if(this.celsius > 50){
      if(!isReset){
      led.strobe(500);
      piezo.tone(five.Piezo.Notes.c4, 1000);
    }
    }else{
      led.stop().off();
      piezo.off();
      isReset = false;
    }
  });
});



// var five = require('johnny-five')
// var board = new five.Board()
//
// board.on('ready', function () {
//   var piezo = new five.Piezo(9)
//   var led = new five.Led(13)
//   var btn = new five.Button(5)
//   var thermo = new five.Thermometer({
//     controller: 'TMP36',
//     pin: 'A0'
//   })
//
//   var threshold = 50
//   var isOnFire = false
//   var isReset = false
//
//   var sirenInterval = null
//
//   // Sound the alarm
//   function panic () {
//     if (isOnFire) return
//     isOnFire = true
//
//     led.strobe(1000)
//     piezo.tone(five.Piezo.Notes.c4, 750)
//     sirenInterval = setInterval(function () {
//       piezo.tone(five.Piezo.Notes.c4, 750)
//     }, 1000)
//   }
//
//   // Silence the things
//   function calm () {
//     if (!isOnFire) return
//     isOnFire = false
//
//     led.stop().off()
//     clearInterval(sirenInterval)
//     piezo.noTone()
//   }
//
//   // The reset button
//   btn.on('press', function () {
//     if (!isOnFire) return
//     isReset = true
//     calm()
//   })
//
//   // Watch the temp
//   thermo.on('change', function () {
//     if (this.celsius > threshold) {
//       if (!isReset) {
//         panic()
//       }
//     } else {
//       calm()
//       isReset = false // clear the reset flag when temp drops below threshold
//     }
//   })
// })
