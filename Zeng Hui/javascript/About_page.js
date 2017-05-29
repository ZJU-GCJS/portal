/**
 * Created by zenghui on 2017/4/13.
 */


window.onload = function () {

    var target_1 = document.getElementById("main-nav").getElementsByTagName("li")[5];
    target_1.onmouseover = function () {
        document.getElementById("nav-platform-menu").style.display = "block";
    };

    var target_2 = document.getElementById("main-nav").getElementsByTagName("li")[5];
    target_2.onmouseout = function () {
        document.getElementById("nav-platform-menu").style.display = "none";
    };

    <!--scroll-->
    var demo1 = document.getElementById("block-1");
    var demo2 = document.getElementById("block-2");
    var demo = document.getElementById("scroll");
    demo2.innerHTML = demo1.innerHTML;
    var speed = 15;

    function picture() {
        if (demo1.offsetHeight - demo.scrollTop <= 0)
            demo.scrollTop -= demo1.offsetHeight;
        else
            demo.scrollTop++;
    }

    var temp = setInterval(picture, speed);
    demo.onmouseover = function () {
        clearInterval(temp);
    };
    demo.onmouseout = function () {
        temp = setInterval(picture, speed);
    };

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: './data/article.json',
        success: function (data) {
            var article =  $("#About-exhibition .About-article");
            article[0].innerHTML = data["article"];
        },error:function(XMLHttpRequest, textStatus, errorThrown){
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        }
    });

};