// This exercise is about serving static assets like HTML files.
// There are many ways to do it, but we want you to apply static middleware to serve the file index.html.
// Please don't use ANY routes like app.get. ONLY static.

const express = require("express");
const path = require('path');
const app = express();
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.listen(process.argv[2]);
