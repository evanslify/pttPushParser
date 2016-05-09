var startCrawl = require('./ptt.js');

exports.goCrawl = function(req, res) {
    var callback = function (data) {
        res.send(data);
    };
    var url = 'https://www.ptt.cc/bbs/tainan/M.1388172150.A.860.html';
    console.log('api: goCrawl: ' + url);
    startCrawl(url, callback);
};

