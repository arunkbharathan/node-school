var fivebeans = require('fivebeans');

var client = new fivebeans.client('192.168.1.46', 11300);

client
    .on('connect', function()
    {
      client.watch('my_tube', function(err, numwatched) {
        client.reserve(function(err, jobid, payload) {
          console.log(String(payload));
        });
      });
     
        // client can now be used
    })
    .on('error', function(err)
    {
      console.log(err);
        // connection failure
    })
    .on('close', function()
    {
      console.log('...Closing the tube...');
        // underlying connection has closed
    })
    .connect();