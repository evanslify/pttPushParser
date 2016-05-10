var startCrawl = require('./ptt.js');

exports.goCrawl = function(req, res) {
    var callback = function (data) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(data);
    };
    var url = req.query.article;
    console.log('api: goCrawl: ' + url);
    startCrawl(url, callback);
};

