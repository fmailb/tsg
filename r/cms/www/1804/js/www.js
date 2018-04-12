/**
 * Created by fy on 2018/4/10. 首页的js
 */
//jquery执行
$(function(){
    //navbar的下拉功能
    $(".mainnavbar").click(function(){
        $(".subnavbar").slideToggle("slow");
        return false;
    });
    $("body,html").click(function(){
        $(".subnavbar").slideUp();
    });

    //头条新闻滚动的几个js
    //滚动框设置
    $(".FocusSlider")
        .slick({
            appendArrows:$('.FocusSlider'),
            prevArrow:'<div class="SliderArrow left"><span class="glyphicon glyphicon-triangle-left"></span></div>',
            nextArrow:'<div class="SliderArrow right"><span class="glyphicon glyphicon-triangle-right"></span></div>',
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    displayArrow();

    //鼠标划过

});

function displayArrow(){
    $arr=$(".SliderArrow");
    $(".FocusSlider")
        .mouseover(function(){$arr.show()})
        .mouseout(function(){$arr.hide()})
}


function qkeypress(){
    var q=$("input[name=q]");
    if(q.val().trim()!=""){
        $("input[name=q]").autocomplete("enable");
    }else{
        $("input[name=q]").autocomplete("disable");
    }
}

