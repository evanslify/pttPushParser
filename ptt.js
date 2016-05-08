var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var article = 'https://www.ptt.cc/bbs/Tainan/M.1388172150.A.860.html';

request(article, function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  $('#main-content > div.push').each(function() {
    var tag = $(this).find('span.push-tag').text().trim();
    var content = $(this).find('span.push-content').text().trim();
    var userid = $(this).find('span.push-userid').text().trim();
    var picture = $(this).next('div.richcontent').find('img');
    // console.log($(this).next());
    console.log('tag: ' + tag);
    console.log('content: ' + content);
    console.log('user: ' + userid);
    console.log('img: ' + picture);
  });
});

