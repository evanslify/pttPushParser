var app = require('express')();
var api = require('./api.js');

var article = 'https://www.ptt.cc/bbs/Tainan/M.1388172150.A.860.html';

app.get('/', function(req, res) {
    api.goCrawl(req, res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
