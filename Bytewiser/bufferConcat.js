let buf = new Buffer('');
process.stdin.on('data', ( data) => {
//if(err) console.log( err);
if(data)
  buf = Buffer.concat([buf, data],buf.length+data.length)
});
process.stdin.on('end', (err) => {
  console.log(buf);
});


// var buffers = [];
//
//    process.stdin.on('readable', function() {
//      var chunk = process.stdin.read();
//      if (chunk !== null) {
//        buffers.push(chunk);
//      }
//    });
//
//    process.stdin.on('end', function() {
//      console.log(Buffer.concat(buffers));
//    });
