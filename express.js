var app = require('express')();
var x = require('x-ray')();
var events = require('events');
var eventEmitter = new events.EventEmitter();
var gocrawl = require('./test2.js');

var article = 'https://www.ptt.cc/bbs/Tainan/M.1388172150.A.860.html';

app.get('/', function(req, res) {
    gocrawl(article, eventEmitter);
    eventEmitter.on('crawlFin', function (collection) {
        res.send(collection);
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
