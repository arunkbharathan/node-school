//start.js
var spawn = require('child_process').spawn,
    py    = spawn('python', ['test.py'],{
    stdio: [null, null, null, 'pipe']
});
    data = [1,2,3,4,5,6,7,8,9],
    dataString = '';

py.stdout.on('data', function(data){
  dataString += data.toString();
});
py.stdout.on('end', function(){
  console.log('Sum of numbers=',dataString);
});
py.stdin.write(JSON.stringify(data));
py.stdin.end();



// var spawn = require('child_process').spawn

// var bears = 0

// bears += 1

// if (process.argv[2] === 'child') {
//   var net = require('net')
//   var pipe = new net.Socket({ fd: 3 })
//   pipe.write('killme')
//   //console.log('child', bears)
// } else {
//   var child = spawn(process.execPath, [__filename, 'child'], {
//     stdio: [null, null, null, 'pipe']
//   })
//   child.stdio[3].on('data', function (data) {
//     if (data.toString() === 'killme') {
//       console.log('RIP')
//       child.kill()
//     }
//   })
//   //console.log('parent', bears)
//   //child.stdout.pipe(process.stdout)
// }
