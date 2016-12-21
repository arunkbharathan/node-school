var fs = require('fs');

function run (generator) {
  // improve `run` above
  let it = generator(go);
  function go(err, result){
    debugger;
    if(err) return it.throw(err);
    it.next(result);
    debugger;
  }
  debugger;
  go();
  debugger;
}
debugger;
run(function* (done) {
  // catch exception
  let firstFile;
debugger;
  try{
    debugger;
    let dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
    firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
  }catch(err){
    debugger;
    firstFile = 'null';
  }
console.log(firstFile);
debugger;
});
