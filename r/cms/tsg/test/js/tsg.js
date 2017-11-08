/**
 * Created by fy on 2017/6/7. 首页的js
 */
function chkinput(self) {
    //处理输入检查。使用时1.用<div class="form-group">包裹input.2.form的onsubmit=return chkinput(this)
    var $div=self.getElementsByClassName('form-group')[0];
    var $input=$div.getElementsByTagName('input')[0];
    s=$input.value;
    //问号表达式 必须用 == 以形成条件，=会出错
    if (s == "" || s == null || s == "请输入有意义的检索词")
    {$input.value= "请输入有意义的检索词";$div.className='form-group has-error';return false; }
    else {return true;}
}

function resetInput(self) {
    //点击输入框清空上次输入,取消 has-error状态
    self.value="";
    self.parentNode.className="form-group"
}

//使用$(function{})的方式调用newsbox.js的参数，确保在document.ready之后执行。
$(function() {
    var options = {
        newsPerPage: 4,
        autoplay: false,
        pauseOnHover: true,
        navigation: true,
        direction: 'up',
        newsTickerInterval: 2500,
        onToDo: function () {
        }
    };
    //执行新闻盒子的滚动js
    $('.demo1').bootstrapNews(options);
    $('.demo2').bootstrapNews(options);
    //执行活动新闻的slider js
    $(".pic").slick({
        appendArrows:$('.newspics .panel-body'),
        prevArrow:'<div class="pre"><span class="glyphicon glyphicon-triangle-left"></span></div>',
        nextArrow:'<div class="pre"><span class="glyphicon glyphicon-triangle-right"></span></div>',
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    })


})



