var events = require('events');
// var eventEmitter = new events.EventEmitter();
var pttcrawl = require('./ptt.js');
var result = function (article, eventEmitter) {
    pttcrawl(article, eventEmitter);
};
module.exports = result;
