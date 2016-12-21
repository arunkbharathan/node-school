const express = require("express");
const path = require('path');
const stylus = require('stylus');
const app = express();
app.use(stylus.middleware(process.argv[3] || path.join(__dirname, 'public')));
app.use(express.static( process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2] || 5000);
