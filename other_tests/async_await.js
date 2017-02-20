const async = require('asyncawait/async');
const await = require('asyncawait/await');

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 5000);
  });
}

const add1 = async (function (x) {
  const a = resolveAfter2Seconds(20);
  const b = resolveAfter2Seconds(30);
  return x + await (a) + await (b);
})

add1(10).then(v => {
  console.log("add1: ",v);  // should print 60 after 5 seconds start.
});

const add2 = async (function (x) {
  const a = await (resolveAfter2Seconds(20));
  const b = await (resolveAfter2Seconds(30));
  return x + a + b;
})

add2(10).then(v => {
  console.log("add2: ",v);  // should print 60 after 10 seconds from start.
});
