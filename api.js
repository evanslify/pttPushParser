var startCrawl = require('./ptt.js');

exports.goCrawl = function(req, res) {
    var callback = function (data) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(data);
    };
    var url = 'https://www.ptt.cc/bbs/tainan/M.1388172150.A.860.html';
    console.log('api: goCrawl: ' + url);
    startCrawl(url, callback);
};

