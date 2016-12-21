    var fs = require('fs');
debugger;
    function readDir(dir) {
      debugger;
      return new Promise(function (resolve, reject) {
        debugger;
        fs.readdir(dir, function (err, res) {
          debugger;
          if (err) {
            debugger;
            reject(err);
            debugger;
          } else {
            debugger;
            resolve(res);
            debugger;
          }
        });
      });
    }

    function run (generator) {
      debugger;
      var it = generator(go);
      let gen;
debugger;
      function go (result) {
        debugger;
        gen = it.next(result);
        debugger;
        gen.value.then(x => it.next(x), x => it.throw(x));
        debugger;
      }
debugger;
      go();
      debugger;
    }

debugger;
    run(function* () {
      // almost the same generator as in the callback exercise
      debugger;
      var exercises = yield readDir('/Users/arunkb');
      debugger;
      console.log(exercises); // [ 'look_sync_do_async', ..., 'run_stop_run' ]
    });
