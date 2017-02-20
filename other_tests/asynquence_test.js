const ASQ = require("asynquence");

ASQ(function step1(done){
    setTimeout(function(){
        done( "Hello" );
    },100);
})
.then(function step2(done,msg){
    setTimeout(function(){
        done( msg.toUpperCase()) ;
    },100);
})
.gate(
    // these two segments '3a' and '3b' run in parallel!
    function step3a(done,msg) {
        setTimeout(function(){
            done( msg + " World" );
            // if you wanted to fail this segment,
            // you would call `done.fail(..)` instead
        },500);
    },
    function step3b(done,msg) {
        setTimeout(function(){
            done( msg + " Everyone" );
        },300);
    }
)
.then(function step4(done,msg1,msg2){
    console.log(msg1,msg2); // "Hello World"  "Hello Everyone"
})
.or(function oops(err){
    // if any error occurs anywhere in the sequence,
    // you'll get notified here
});
