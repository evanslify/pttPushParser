var app = require('express')();
var api = require('./api.js');

app.get('/', function(req, res) {
    console.log('Request received.');
    api.goCrawl(req, res);
});

app.listen(3000, function () {
  console.log('i am listening on port 3000!');
});
