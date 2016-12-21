var fivebeans = require('fivebeans');

var client = new fivebeans.client('192.168.1.46', 11300);

client
  .on('connect', function(){
    client.use('my_tube', function(err, name){
      client.put(0,0,60, "Hai", function(err, jobid){
        console.log(jobid);
      })
    })
  }).on('error', function(err){
    console.log(err);
  })
  .on('close', function(){
    console.log('...Closing the tube...');
  })
  .connect();



