var loki = require('lokijs');
var db = new loki('loki.json');

var schema = function () {
    var tag;
    var content;
    var userid;
    var picture;
    return { tag, content, userid, picture };
};

var collection = db.addCollection('pttarticle');

module.exports = { schema, collection, db };

