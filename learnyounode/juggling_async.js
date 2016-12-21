// var bl = require('bl');
// var http = require('http');

// var data1,data2,data3;

// http.get(process.argv[2],function(res){
// 	res.pipe(bl(function(err,data){
// 		if (err) {
// 			return console.error(err)
// 		    }
// 		data1 = data.toString()
// 		http.get(process.argv[3],function(res){
// 	res.pipe(bl(function(err,data){
// 		if (err) {
//              return console.error(err)
//            }
// 		data2 = data.toString()
// 		http.get(process.argv[4],function(res){
// 	res.pipe(bl(function(err,data){
// 		if (err) {
//              return console.error(err)
//            }
// 		data3 = data.toString()
// 		console.log(data1);
// 		console.log(data2);
// 		console.log(data3);
// 	}));
// })

// 	}));
// })
// 	}));
// })



     var http = require('http')
     var bl = require('bl')
     var results = []
     var count = 0
     var interval

     function printResults () {
       clearInterval(interval)
       for (var i = 0; i < 3; i++) {
         console.log(results[i])
       }
     }

     function httpGet (index) {
       http.get(process.argv[2 + index], function (response) {
         response.pipe(bl(function (err, data) {
           if (err) {
             return console.error(err)
           }

           results[index] = data.toString()
           count++
         }))
       })
     }

     for (var i = 0; i < 3; i++) {
       httpGet(i)
     }

     interval = setInterval(looping, 1)

     function looping() {
     	if (count === 3) {
             printResults()
        }
     }	




     // var http = require('http')
     // var bl = require('bl')
     // var results = []
     // var count = 0

     // function printResults () {
     //   for (var i = 0; i < 3; i++) {
     //     console.log(results[i])
     //   }
     // }

     // function httpGet (index) {
     //   http.get(process.argv[2 + index], function (response) {
     //     response.pipe(bl(function (err, data) {
     //       if (err) {
     //         return console.error(err)
     //       }

     //       results[index] = data.toString()
     //       count++

     //       if (count === 3) {
     //         printResults()
     //       }
     //     }))
     //   })
     // }

     // for (var i = 0; i < 3; i++) {
     //   httpGet(i)
     // }