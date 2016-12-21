
'use strict'
  console.log('SERVER STARTED');
  var fs = require("fs");
  var app = require('express') ()
  var bodyParser = require('body-parser')

  app.use(bodyParser.urlencoded({extended: true}))
  var jsonParser = (bodyParser.json())
  app.use(jsonParser)

  app.post('/log', function(req, res) {
    if(!req.body.hasOwnProperty('user_id') || 
      !req.body.hasOwnProperty('log')) {
      res.statusCode = 400
    return res.send('Error 400: Post syntax incorrect.')
  }
  var user_id = req.body.user_id
  var log = req.body.log
  fs.appendFile(user_id+'.log', log, function (err){
    if (err)
      throw err
                    //console.log('saved successfully')
                    res.end("success",200)
                  })
                  //console.log("post finished.")
                })
  app.listen(5000)
