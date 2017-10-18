/**
 * Created by fy on 2017/6/7.
 */
function check1(self) {
    var $input;
    self.name=='navs'?$input='q':$input='strText';
    $input=eval('self.'+$input);
    s=$input.value;
    //问号表达式 必须用 == 以形成条件，=会出错
    // n=='navs'?s=self.q.value:s=self.strText.value
    if (s == "" || s == null || s == "请输入有意义的检索词") {
        $input.value= "请输入有意义的检索词";
        self.getElementsByClassName('form-group')[0].className='form-group has-error'
        return false;
    }
    else {
        return true;

    }
}

function resetInput(self) {
    self.value="";
    self.parentNode.className='form-group';
}

//newsbox1：滚动js
//使用$(function{})的方式调用滚动js函数，确保在document.ready之后执行。
$(function() {
    var options = {
        newsPerPage: 4,
        autoplay: true,
        pauseOnHover: true,
        navigation: true,
        direction: 'down',
        newsTickerInterval: 2500,
        onToDo: function () {
//console.log(this);
        }
    }

    // var hoverHandler = function (e) {
    //     e.preventDefault()
    //     //bootstrap.js的tab的plugin函数，注册到jQuery名为$.fn.tab
    //     var self = $(this);
    //     $(self.attr("href")).children('ul').addClass('demo2');
    //     $(self.attr("href")).siblings().children('ul').removeClass('demo2');
    //     $.fn.tab.call(self, 'show');
    // }

    $(document)
        // .on('mouseover.bs.tab.data-api', '[data-toggle="tab"]', hoverHandler)
        // .on('mouseover.bs.tab.data-api', '[data-toggle="pill"]', hoverHandler)
        .ready(function () {
            $('.demo1').bootstrapNews(options);
            $('.demo2').bootstrapNews(options);
        })

    // $('[data-toggle="tab"]')
    //     .on('shown.bs.tab', function (e) {$(".demo2").bootstrapNews(options)})
})



