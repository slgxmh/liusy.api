var tplBaseUrl = "";

var baseUrl = "http://localhost:8080/web-0.0.1-SNAPSHOT";


var constant = {
   	API_PEOPLE : baseUrl+"/people/",
   	API_MESSAGE : baseUrl+"/message/"
}

var tools = {

}

function loadTemplate(tpl) {
    var template = null;
    $.ajax({
        url : tplBaseUrl + tpl,
        type : 'GET',
        data : {}, //默认从参数获取
        timeout : 10000,
        async : false,
        success : function(data) {
            template = _.template(data);
        },
        error : function(e) {
        }
    });
    return template;
}

function loadSequence(urls, callback) {
    var loader = null;
    for (var i in urls) {
        var url = urls[i];
        loader = $LAB.script(url);
    }
    loader ? loader.wait(callback) : callback();
}
