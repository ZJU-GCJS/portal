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
    <!--scroll-->

    var demo1 = document.getElementById("block-1");
    var demo2 = document.getElementById("block-2");
    var demo = document.getElementById("scroll");
    demo2.innerHTML = demo1.innerHTML;
    var speed = 15;
    function picture() {
        if (demo1.offsetWidth-demo.scrollLeft<=0)
            demo.scrollLeft-=demo1.offsetWidth;
        else
            demo.scrollLeft++;
    }
    var temp = setInterval(picture, speed);
    demo.onmouseover = function () {
        clearInterval(temp);
    };
    demo.onmouseout = function () {
        temp = setInterval(picture, speed);
    };
};