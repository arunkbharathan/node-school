const express = require('express');
const crypto = require('crypto');
const app = express();


app.param('id', function (req, res, next, id) {
        req.id = id
        next()
      })

app.put('/message/:id', function (req, res) {
  res.end(crypto
  .createHash('sha1')
  .update(new Date().toDateString() + req.id)
  .digest('hex'));
      });

app.listen(process.argv[2] || 5000);
