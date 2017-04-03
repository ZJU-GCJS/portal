/**
 * Created by zenghui on 2017/2/1.
 */
window.onload = function () {
    var target_1 = document.getElementById("main-nav").getElementsByTagName("li")[5];
    target_1.onmouseover = function () {
        document.getElementById("nav-platform-menu").style.display = "block";
    };

    var target_2 = document.getElementById("main-nav").getElementsByTagName("li")[5];
    target_2.onmouseout= function () {
        document.getElementById("nav-platform-menu").style.display = "none";
    };
};

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: './data/data.json',
        success: function (data) {
            var article =  $("#home-blog .blog-article");
            var title = $("#home-blog .blog-title");
            for (var j = 0; j <  title.length; j++) {
                title[j].innerHTML = data["title"];
            }
            for (var i = 0; i <  article.length; i++) {
                article[i].innerHTML = data["article"][i];
            }
        },error:function(XMLHttpRequest, textStatus, errorThrown){
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        }
    });
});