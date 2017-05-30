/**
 * Created by Lin on 3/4/2017.
 */


window.onload = function () {

};

var sum = 0;
var page = 1;
var end = 1;

$(function(){
    function search(){
        var value=$('#search1').val();
        if (value){
            $(".lin-search-container ").show();
            $(".search-respond ").show();

            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: './data/search-'+value+'.json',
                success: function (data) {
                    sum = data["sum"];
                    page = 1;
                    end = (page*10 > sum) ?  sum:page*10;
                    var respond = $('#search2');
                    respond.empty();
                    if (sum)
                        respond.append("<h3>结果</h3><p>找到"+sum+"篇关于"+value+"的文档。已显示结果"+(page*10-9)+"-"+end+"。</p> ");
                    else
                        respond.append("<h3>结果</h3><p>找到0篇关于"+value+"的文档。</p> ");
                    var result = data["article"];
                    console.log(result)
                    var result_DOM =  $(".lin-search-result");

                    function next_page(){
                        page ++;
                        show()
                    }
                    function prev_page(){
                        page--;
                        show();
                    }

                    function show() {
                        result_DOM.empty();

                        if (sum) {
                            for (var i = page * 10 - 9; i <= end; i++) {
                                result_DOM.append("<article class=\"post\"><header class=\"post-header\"><h2 class=\"post-title\"><a href=\"" + result[i - 1].link + "\">" + result[i - 1].title + "</a></h2></header>"
                                    + "<div class=\"post-meta\">" + result[i - 1].author + "<time class=\"post-date\">" + result[i - 1].date + "</time></div>"
                                    + "<section class=\"post-excerpt\"><p>" + result[i - 1].p + "</p><p><a class=\"read-more\" href=\"" + result[i - 1].link + "\">查看全文</a></p></section></article>");
                            }
                            result_DOM.show();
                        }


                        result_DOM.append("<nav class=\"pagination\"><span class=\"page-number\">Page " + page + " of " + parseInt((sum + 9) / 10) + "</span></nav></div>");
                        if (page > 1) {
                            $(".pagination").prepend("<a class=\"newer-posts\" href=\"#\" >Newer Posts <span aria-hidden=\"true\">→</span></a>")
                        }
                        if (page < parseInt((sum + 9) / 10)) {
                            $(".pagination").prepend("<a class=\"older-posts\" href=\"#\" >Older Posts <span aria-hidden=\"true\">→</span></a>")
                        }


                    }
                    show();

                    $(".newer-post").click(function () {
                        prev_page();
                    });

                    $(".older-post").click(function(){
                        console.log(111);
                        next_page();
                    });

                },error:function(XMLHttpRequest, textStatus){
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState);
                    console.log(textStatus);
                }
            });
        }
    }
    $("#search1").on("keyup",function(event){
        var event1 = event || window.event;
        if(event1.keyCode == 13){
            search();
        }
    })


});
