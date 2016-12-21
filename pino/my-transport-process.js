'use strict'

var fs = require("fs");
var request = require('request');
var buf = new Buffer(1024*40);
var interval;

console.log("Going to open an existing file");
fs.open('sensor.log', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");

   interval = setInterval(fs.read,200,fd, buf, 0, buf.length, null,function(err, bytes){
      if (err){
         console.log(err);
      }
      //console.log(bytes + " bytes read");
      
      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log("sending");
         var data_to_send = buf.slice(0, bytes).toString();
         
         request.post('http://127.0.0.1:5000/log', {form:{user_id:'arun', log:data_to_send}}, function(err,httpResponse,body){ 
         	if(err)
               console.log(err)
         });
      }
      else
      	{
            console.log('Done');
         }
   });
});




//setTimeout(function(){clearInterval(interval);}, 15000);



//fs.read(fd, buffer, offset, length, position, callback)
//callback (err, bytesRead, buffer).