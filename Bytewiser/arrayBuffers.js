let num = +process.argv[2];
//console.log(JSON.stringify(num));
let buffer = new ArrayBuffer(4);
let Uint32View = new Uint32Array(buffer);
 Uint32View[0] = num;
//console.log(JSON.stringify(Uint32View));
 let Uint16View = new Uint16Array(buffer);
console.log(JSON.stringify(Uint16View))


// var num = Number(process.argv[2])
// var ui32 = new Uint32Array(1)
// ui32[0] = num
// var ui16 = new Uint16Array(ui32.buffer)
// console.log(JSON.stringify(ui16))
