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

    //焦点图片滚动的几个js
    //滚动框设置
    $(".FocusSlider")
        .slick({
            appendArrows:$('.FocusSlider'),
            prevArrow:'<div class="SliderArrow prev"><span class="glyphicon glyphicon-triangle-left"></span></div>',
            nextArrow:'<div class="SliderArrow next"><span class="glyphicon glyphicon-triangle-right"></span></div>',
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed:700,
            autoplay:false,
            easing:'swing',
        });

    //新闻滚动
    var options = {
        newsPerPage: 6,
        autoplay: true,
        pauseOnHover: true,
        navigation: false,
        direction: 'up',
        newsTickerInterval: 1500,
    };
    $('.demo1').bootstrapNews(options);

    //bootstrap tooltip 初始化
    var tooltipOpt ={
        placement:"top",
    }
    $('[data-toggle="tooltip"]').tooltip(tooltipOpt)

    //鼠标划过显示翻页箭头
    displayArrow();


    //访问计数等
    Cms.siteFlow("${base}", location.href, document.referrer, "${site.config.flowSwitch?string}");
    $.cookie("_site_id_cookie","${site.id!}",{path: '${base}' });
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

