// Oftentimes, we need to process the data from the URL query string (urlencoded).
// Write a route that extracts data from the query string in the GET /search URL
// route, e.g. ?results=recent&include_tabs=true and then outputs it back to
// the user in JSON format.
// Use app.get('/search', function(){...}) for the route.
// In Express.js, to extract query string parameters, we can use (inside the request handler):
//     req.query.NAME


    const express = require('express');
    const crypto = require('crypto');
    const app = express();



    app.get('/search', function (req, res) {
      // let tmp = {};
      // let obj = req.query;
      // for (var prop in obj) {
      //   if( obj.hasOwnProperty( prop ) ) {
      //     tmp[prop] = obj[prop];
      //   }
      // }
      let tmp = req.query;

      res.send(tmp);
          });

    app.listen(process.argv[2] || 5000);
