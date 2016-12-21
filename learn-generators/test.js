  var fs = require('fs');

    function run (generator) {
      debugger;
      var it = generator(go);
debugger;
      function go (err, result) {
        debugger;
        it.next(result);
        debugger;
      }
debugger;
      go();
      debugger;
    }
debugger;
    run(function* (done) {
      debugger;
      // read `learn-generators` exercises folder
      var exercises = yield fs.readdir('/Users/arunkb', done);
      debugger;
      console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
    });
