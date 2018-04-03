// $(document).ready(function(){
// 	$(".menu li").hover(function(){
// 			$(this).addClass("hover");
// 			$(this).children("ul li").attr('class','');
// 		},function(){
// 			$(this).removeClass("hover");
// 			$(this).children("ul li").attr('class','');
// 		}
// 	);
// 	$(".menu li.no_sub").hover(function(){
// 			$(this).addClass("hover1");
// 		},function(){
// 			$(this).removeClass("hover1");
// 		}
// 	);
// })
// $(function() {
//     Cms.siteFlow("${base}", location.href, document.referrer);
// });


$(function() {
    //自动完成，似乎没有用
    // $("input[name=q]").autocomplete({
    //     source: "${base}/search/v_ajax_list.jspx",
    //     minLength: 2,
    //     max:5,
    //     delay:100,
    //     autoFocus: true,
    //     select: function(e, ui) {
    //         $("input[name='q']").val(ui.item.value);
    //         $("#searchForm").submit();
    //     },
    //     success: function( data ) {
    //         response( $.map( data.items, function( item ) {
    //             return {
    //                 label: '<B>' + item.id + '</B><br>',
    //                 value: item.id
    //             }
    //         }));
    //     }
    // });
    //首页新闻hover栏目名称切换
    $(".tab01 li").hover(function(e) {
        nowTab=$(this).index();
        $(this).parent().children().removeClass("selected01");
        $(this).addClass("selected01");
        $(this).parent().parent().nextAll().addClass("dpN");
        $(this).parent().parent().parent().children().eq(nowTab+1).removeClass("dpN");
    });

    $(".tab02 li").hover(function(e) {
        nowTab=$(this).index();
        $(this).parent().children().removeClass("selected02");
        $(this).addClass("selected02");
        $(this).parent().parent().nextAll().addClass("dpN");
        $(this).parent().parent().parent().children().eq(nowTab+1).removeClass("dpN");
    });
});

function qkeypress(){
    var q=$("input[name=q]");
    if(q.val().trim()!=""){
        $("input[name=q]").autocomplete("enable");
    }else{
        $("input[name=q]").autocomplete("disable");
    }
}

