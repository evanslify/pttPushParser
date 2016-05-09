// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
  // res.send('Hello World!');
// });

var app = require('express')();
var x = require('x-ray')();

app.get('/', function(req, res) {
  res.send(x('https://www.google.com', 'title').stream());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
