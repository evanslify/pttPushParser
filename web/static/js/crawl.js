function run() {
    var articleurl = $('#search').val();
    $.ajax({
        url: 'http://192.168.1.132:8000/api/',
        // url: 'http://localhost:3000',
        type: 'get',
        data: {'article': articleurl},
        success: function (data, textStatus, jqXHR) {
            console.log('AJAX success!');
            console.log(data);
            writeToTable(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('ajax error: ' + errorThrown);
        }
    });
}

function clearTable() {
    $('.tablebody').empty();
}

$('#searchbox').submit(function(e) {
    e.preventDefault();
    clearTable();
});

function writeToTable(json) {
    var tr;
    for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + json[i].userid + "</td>");
        tr.append("<td>" + json[i].content.slice(2) + "</td>");
        tr.append("<td>" + json[i].tag + "</td>");
        tr.append("<td>" + json[i].date + "</td>");
        var pictureObj = json[i].picture;
        var pictures = '';
        for (var picture in pictureObj) {
            if (pictureObj[picture]) {
                pictures += '<img src="' + pictureObj[picture] + '"/>';
            }
        }
        if (pictures.length === 0) {
            pictures = '&#160;';
        }
        tr.append("<td id=\"imagecell\">" + pictures + "</td>");
        $('.tablebody').append(tr);
    }
}
