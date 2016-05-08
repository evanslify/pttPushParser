var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var article = 'https://www.ptt.cc/bbs/Tainan/M.1388172150.A.860.html';

var getLinkInContent = function(datadict) {
    content = datadict.content;
    picture = datadict.picture;
    newPicture = [];
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    if (content.match(urlRegex)) {
        newPicture.push.apply(newPicture, picture);
        newPicture.push.apply(newPicture, content.match(urlRegex));
        datadict.picture = newPicture;
    }
    return datadict;
};

var runFetch = function(article) {
    request(article, function(error, response, body) {
        if(error) {
            console.log("Error: " + error);
        }
        console.log("Status code: " + response.statusCode);

        var $ = cheerio.load(body);
        var data = [];
        $('#main-content > div.push').each(function() {
            var datadict = {};
            var tag = $(this).find('span.push-tag').text().trim();
            var content = $(this).find('span.push-content').text().trim();
            var userid = $(this).find('span.push-userid').text().trim();
            var picture = [];
            picture.push($(this).next('div.richcontent').find('img').attr('src'));
            datadict = {
                'tag': tag,
                'content': content,
                'userid': userid,
                'picture': picture,
            };
            datadict = getLinkInContent(datadict);
            data.push(datadict);
        });
        console.log(data);
    });
};



runFetch(article);
