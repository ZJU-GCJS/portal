/**
 * Created by zenghui on 2017/2/1.
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
};