function fibo(n) {
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}

var Threads = require('threads_a_gogo');
var t = Threads.create();

t.eval(fibo);

t.eval('fibo(40)', function(err, result) {
    if (err) throw err; // something abnormal
    // print the result
    console.log('fibo(10)=' + result);
    // chain with next step
    step2();
});

function step2() {
    t.eval('fibo(20)', function(err, result) {
        if (err) throw err;
        console.log('fibo(20)=' + result);
        step3();
    });
}

function step3() {
    // 'x' is not defined
    t.eval('fibo(x)', function(err, result) {
        console.log('error=' + err);
        step4();
    });
}

function step4() {
    t.eval('fibo(100)', function(err, result) {
        console.log('fibo(40)=' + result);
        step5();
    });
}

function step5() {
    t.destroy();
}
