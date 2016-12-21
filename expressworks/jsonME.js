// Write a server that, when it receives a GET, reads a file, parses it to JSON,
// and responds with that content to the user.
// The server should respond to any GET that matches the /books resource path.
// As always, the port is passed in process.argv[2]. The file to read is passed
// in process.argv[3].
// Respond with:
//     res.json(object)
// Everything should match the /books resource path.
// For reading the file, use the fs module, e.g.,
//     fs.readFile(filename, callback)

    const express = require('express');
    const fs = require('fs');
    const app = express();

    app.get('/books', (req, res) => {
      fs.readFile(process.argv[3] || './json.txt', (err, data) => {
        if(err) {
          res.sendStatus(500)
          throw err
        };
        try{
          let tmp = JSON.parse(data);
          res.json(tmp);
        }
        catch (e){
          res.sendStatus(500);
          res.end();
          throw e;
        }


      });
    });

    app.listen(process.argv[2] || 5000);
