var events = require('events');
var pttcrawl = require('./ptt.js');
var result = function (article, eventEmitter) {
    pttcrawl(article, eventEmitter);
};
module.exports = result;
