$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:3000',
        type: 'get',
        data: {'article': 'https://www.ptt.cc/bbs/Tainan/M.1388172150.A.860.html'},
        success: function (data, textStatus, jqXHR) {
            writeToTable(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('ajax error: ' + errorThrown);
        }
    });
});


function writeToTable(json) {
    var tr;
    for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + json[i].userid + "</td>");
        tr.append("<td>" + json[i].content.slice(2) + "</td>");
        tr.append("<td>" + json[i].tag + "</td>");
        var pictures = '';
        var pictureObj = json[i].picture;
        for (var picture in pictureObj) {
            if (pictureObj[picture]) {
                pictures += '<img src="' + pictureObj[picture] + '"/>';
            }
        }
        tr.append("<td>" + pictures + "</td>");
        $('.table').append(tr);
    }
}
