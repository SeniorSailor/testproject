$(document).ready(function(){
    /***鼠标滑过按钮变色*****/
     function waringBtnChange(){
         for(var i = 0;i<$(".waringBox button").length;i++){
             (function(i){
                 $(".waringBox button").eq(i).hover(function(){
                     $(".waringBox button").eq(i).css({"background":"url('img/waringImg8.png') no-repeat center","color":"#fff"});
                 },function(){
                     $(".waringBox button").eq(i).css({"background":"url('img/waringImg9.png') no-repeat center","color":"#333"});
                 });
             })(i);
         }
     }

    waringBtnChange();

    /***遮罩层hover效果****/
    function slideDown(m){
        $(".coreBannerBox>div").eq(m).find("a").find("div").slideDown(100);
    }

    function slideUp(m){
        $(".coreBannerBox>div").eq(m).find("a").find("div").slideUp(100);
    }

    function coverChange(){
        for(var i = 0;i<$(".coreBannerBox>div").length;i++){
            (function(i){
                $(".coreBannerBox>div").eq(i).hover(function(){
                    slideDown(i);
                },function(){
                    slideUp(i);
                });
            })(i);
        }
    }
    coverChange();

    /***遮罩层文字居中***/
    function getMiddle(){
        for(var m = 0;m<$(".coreBannerBox>div").length;m++){
            var height = $(".coreBannerBox>div").eq(m).height();
            $(".coreBannerBox>div").eq(m).find("div").find("span").css({"lineHeight":height+"px"});
        }
    }
    window.onload = function(){
        getMiddle();
    };

    /***页码hover效果****/
    function pageNumHover(){
        for(var i = 0;i<$(".pageNum").length;i++){
            (function(i){
                if(!$(".pageNum").eq(i).hasClass("dark") && !$(".pageNum").eq(i).hasClass("blackCurrent")){
                    $(".pageNum").eq(i).hover(function(){
                        $(".pageNum").eq(i).find("a").css({"color":"#fff","background":"#000"});
                    },function(){
                        $(".pageNum").eq(i).find("a").css({"color":"#000","background":"#fff"});
                    });
                };
            })(i);
        }
    }
    pageNumHover();
});