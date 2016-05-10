var express = require('express');
var app = express();
var api = require('./api.js');
var path = require('path');

app.use(express.static(
    path.join(__dirname, '/web/'))
);

app.get('/api/', function(req, res) {
    console.log('Request received.');
    api.goCrawl(req, res);
});

app.listen(8000, function () {
  console.log('i am listening on port 3000!');
});
