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


    (function () {
        var winWitdth ;
        if (window.innerWidth)
            winWitdth = window.innerWidth;
        else
        if ((document.body) && (document.body.clientWidth))
            winWitdth = document.body.clientWidth;
        if (winWitdth < 992) {
            var blog = $("#home-blog .col-sm-6 ");
            var row = $("#home-blog .row");
            row[2].appendChild(blog[2]);
            row[2].appendChild(blog[5]);
        }
    }())
};


$(document).ready(
    function getData() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: './data/data.json',
            success: function (data) {
                var article = $("#home-blog .blog-article");
                var title = $("#home-blog .blog-title");
                var img = $("#home-blog .thumbnail>img");
                for (var index = 0; index < data["blog"].length; index++) {
                   /* img[index].setAttribute("data-src", data["blog"][index]["img"]);*/
                    img[index].src = data["blog"][index]["img"];
                    article[index].innerHTML = data["blog"][index]["article"];
                    title[index].innerHTML = data["blog"][index]["title"];
                }
            }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest.status);
                console.log(XMLHttpRequest.readyState);
                console.log(textStatus);
            }
        });
    }
);