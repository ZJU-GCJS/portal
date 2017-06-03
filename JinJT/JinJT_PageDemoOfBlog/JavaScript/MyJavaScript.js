window.onload=function()
{

    var target_1 = document.getElementById("main-nav").getElementsByTagName("li")[5];
    target_1.onmouseover = function () {
        document.getElementById("nav-platform-menu").style.display = "block";
    };

    var target_2 = document.getElementById("main-nav").getElementsByTagName("li")[5];
    target_2.onmouseout= function () {
        document.getElementById("nav-platform-menu").style.display = "none";
    };


  var passage_lists=document.getElementById("JJT_passage_lists");
    var passage_time_lists={
        "2016":{
            "January":1,
            "February":2,
            "March":3,
            "April":4,
            "May":5,
            "June":6,
            "July":7,
            "August":8,
            "September":9,
            "October":10,
            "November":11,
            "December":12
        },
        "2017":{
            "text1":1,
            "text2":2
        }
    };



  for (var i in passage_time_lists)
  {
      var time_list=document.createElement("ul");
      time_list.addEventListener("click",function(e)
      {

      });
      time_list.className="JJT_dropdown";
      time_list.innerHTML=i;
      for (var j in passage_time_lists[i])
      {

          var item=document.createElement("li");
          item.innerHTML=j;
          item.className="JJT_dropdown_item";
          item.id="JJT_dropdown_item";
          time_list.appendChild(item);
      }
      passage_lists.appendChild(time_list);
  }

    passage_lists.addEventListener("click",function(e)
    {
        if (e.target.nodeName=='UL')
        {
            var items=e.target.childNodes;
            for (var i=0;i<items.length;++i)
            {
                if (items[i].nodeName.toUpperCase()=="LI")
                {
                    if (items[i].style.display=="none")
                    {
                        items[i].style.display="block";
                    }
                    else
                    {
                        items[i].style.display="none";
                    }
                }
            }
        }
        else
        {
            // (function()
            // {
            //     var request=null;
            //     if (window.XMLHttpRequest)
            //     {
            //         request=new XMLHttpRequest();
            //     }
            //     else
            //     {
            //         if (window.ActiveXObject)
            //         {
            //             request= new ActiveXObject("Microsoft.XMLHTTP");
            //         }
            //     }
            //     if (request)
            //     {
            //         console.log("123");
            //         var display_txt_name=e.target.innerHTML;
            //         console.log(request.responseText);
            //         request.open("GET","hello.txt",true);
            //         request.onreadystatechange=function()
            //         {
            //             if (request.readyState===4)
            //             {
            //                 if (request.status==200||request==0)
            //                 {
            //                     document.getElementById("JJT_passage").innerHTML=request.responseText;
            //                 }
            //             }
            //         };
            //         request.send=null;
            //     }
            //     else
            //     {
            //         alert("error0");
            //     }
            // }());
        }
    });


    var Botton_To_Top=document.getElementsByClassName("JJT_Botton_To_Top")[0];
    Botton_To_Top.onclick=function()
    {
      var sth;
        sth=setInterval(scrollTop,20);
        function scrollTop()
        {
                if (document.body.scrollTop<=0)
                {
                    clearInterval(sth);
                }
                else
                {
                    window.scrollBy(0,-60);
                }
        }
    };

    var nav=document.getElementById("JJT_nav").getElementsByTagName("li");
    var auto_dropmenu=document.getElementById("JJT_automatic_dropdown_menu");
    nav[6].onmouseover=
        (function()
        {
            auto_dropmenu.style.display="block";
        });

    nav[6].mouseleave=
        setTimeout(function()
        {
            auto_dropmenu.mouseleave=
                (function()
                {
                    auto_dropmenu.style.display="none";

                })
        },300);
};


window.ready=function()
{
    var JJT_passage=document.getElementById("JJT_passage");
    var content=document.ajax({url:"hello.txt",async:false});
    JJT_passage.html(content.responseText);
};

//
// $(document).ready(function()
// {
//    $(".JJT_dropdown_item").click(function()
//    {
//        console.log("123123");
//        var htmlobj=$.ajax({url:"hello.txt",async:false});
//        $("#JJT_passage").html(htmlobj.responseText);
//    })
// });