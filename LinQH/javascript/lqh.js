/**
 * Created by Lin on 3/4/2017.
 */


window.onload = function () {

};

var sum = 0;
var page = 1;
var end = 1;
var result = null;


$(function(){


    $(".lin-search-container ").show();
    $(".search-respond ").show();
    var result_DOM =  $(".lin-search-result");
    var value=$('#search1').val();

    function show() {
        var respond = $('#search2');
        respond.empty();

        end = (page*10 > sum) ?  sum:page*10;
        if (sum)
            respond.append("<h3>结果</h3><p>找到 "+sum+" 篇关于 "+value+" 的文档。已显示结果 "+(page*10-9)+" - "+end+" 。</p> ");
        else
            respond.append("<h3>结果</h3><p>找到 0 篇关于 "+value+" 的文档。</p> ");

        result_DOM.empty();
        if (sum) {
            for (var i = page * 10 - 10; i < end; i++) {
                result_DOM.append("<article class=\"post\"><header class=\"post-header\"><h2 class=\"post-title\"><a href=\"" + result[i].link + "\">" + result[i].title + "</a></h2></header>"
                    + "<div class=\"post-meta\">" + result[i].author + "<time class=\"post-date\">" + result[i].date + "</time></div>"
                    + "<section class=\"post-excerpt\"><p>" + result[i].p + "</p><p><a class=\"read-more\" href=\"" + result[i].link + "\">查看全文</a></p></section></article>");
            }
            result_DOM.show();
        }
        if (parseInt((sum+9)/10) == 1||sum==0)
        {
            $(".lin-search-nav").hide();
        }else
        {
            $(".lin-search-nav").show();
            if (page == 1){
                $(".lin-search-nav .previous").attr("class","previous disabled");
            } else
            {
                $(".lin-search-nav .previous").attr("class","previous");
            }

            if (page == parseInt((sum+9)/10))
            {
                $(".lin-search-nav .next").attr("class","next disabled");
            } else
            {
                $(".lin-search-nav .next").attr("class","next");
            }
        }
    }



    function search(){
        if (value){
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: './data/search-'+value+'.json',
                success: function (data) {
                    sum = data["sum"];
                    page = 1;
                    end = (page*10 > sum) ?  sum:page*10;
                    result = data["article"];

                    show();

                },error:function(XMLHttpRequest, textStatus){
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState);
                    console.log(textStatus);
                }
            });
        }
    }



    $("#search1").on("keyup",function(event){
        value=$('#search1').val();
        var event1 = event || window.event;
        if(event1.keyCode == 13){
            search();
        }
    });

    $(".next").on("click",function() {

        if (page < parseInt((sum + 9) / 10))
        {
            page++;
            show();
        }
    });
    $(".previous").on("click",function(){

        if (page>1)
        {
            page--;
            show();
        }
    })

});
