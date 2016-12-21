function askFoo () {
  return new Promise(function (resolve, reject) {
    //reject(new Error("fvfv"));
    resolve("foo");
  });
}

function run (generator) {
  // your code goes here
  function go(){
    let it = generator();
    let gen = it.next();
    gen.value.then(x => it.next(x), x => it.throw(x));
  }
  go()
}

run(function* () {
  // improve: errors?
  try{
    var foo = yield askFoo();
    console.log(foo);
  }catch(e){
    console.log("Caught: ",e);
  }
});
