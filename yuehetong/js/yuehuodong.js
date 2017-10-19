// 点击显示隐藏
$(".caidan").click(function() {
    $(".nav-right").slideToggle();
    return false;
})

//   小于1000点击文档隐藏导航 大于 不隐藏
$(document).click(function() {
    var Maxwidth = $(window).width();
    // console.log(Maxwidth);

    if (Maxwidth < 1000) {
        $(".nav-right").slideUp();
    }
})

//    窗口发生改变 隐藏导航
$(window).resize(function() {
    var width1 = $(window).width();
    if (width1 < 1005) {
        $(".nav-right").hide();
    } else {

        $(".nav-right").show();

    };
});


// 内容图
var arr1 = [
    { "background": "url(image2/1.png)" },
    { "background": "url(image2/2.jpg)" },
    { "background": "url(image2/3.jpg)" },
    { "background": "url(image2/4.jpg)" },
    { "background": "url(image2/5.png)" },
    { "background": "url(image2/6.png)" },
    { "background": "url(image2/7.jpg)" },
    { "background": "url(image2/8.jpg)" },
    { "background": "url(image2/9.jpg)" },
    { "background": "url(image2/10.png)" },
    { "background": "url(image2/11.jpg)" },
    { "background": "url(image2/12.jpg)" },
    { "background": "url(image2/13.jpg)" },
    { "background": "url(image2/14.jpg)" },
    { "background": "url(image2/15.jpg)" },
    { "background": "url(image2/16.jpg)" },
]
$(".demo1").each(function(index, element) {
        $(this).css(arr1[index]);
    })
    //   划入划出 图片放大
$(".demo1").mouseover(function() {
    $(this).css("transform", "scale(1.08)");
    // $(this).transition("this" ,"0.8s" ,"ease-in-out");
});
$(".demo1").mouseout(function() {
        $(this).css("transform", "scale(1)");
    })
    //给dame1外面添加一个div
$(".demo1").wrap('<div class="demo1_1">');
//  回到顶部
$(function() {
    $(".jiantou").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".jiantou").show();
        } else {
            $(".jiantou").hide();
        }
    })
    $(".jiantou").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 800);
        return false;
    })
});
// 二维码 显示隐藏
$(function() {
    $(".weixingtu").mouseover(function() {
        // $(".weixingtu").hide();
        // $(".weixingkefu").show();
        // $(".erweima").show();
        $(this).hide().siblings(".weixingkefu").show().siblings(".erweima").show();
    });
    $(".weixingkefu").mouseout(function() {
        // $(".weixingkefu").hide();
        // $(".weixingtu").show();
        // $(".erweima").hide();
        $(this).hide().siblings(".weixingtu").show().siblings(".erweima").hide();
    })
})


// 登录 注册
$(function() {
        $(".denglu").click(function() {
            $(".container__denglu").css("display", "block");
            $(document).css("background-color", "#ccc");
        })
        $(".x").click(function() {
            $(".container__denglu").hide();
        })
    })
    // 点击账号切换到密码
$(function() {
        $(".btn2").click(function() {
            $(".yc1").css("display", "block");
            $(".yc2").css("display", "none");
            $(".btn1").css("color", "#999").css("border-bottom", "none");
            $(".btn2").css("color", "#2fb4e9").css("border-bottom", "2px solid #2fb4e9");

        })
    })
    // 点击切换到快速登录 ／免费加入页面
$(function() {
    $(".btn1").click(function() {
        $(".yc1").css("display", "none");
        $(".yc2").css("display", "block");
        $(".btn2").css("color", "#999").css("border-bottom", "none");
        $(".btn1").css("color", "#2fb4e9").css("border-bottom", "2px solid #2fb4e9");



    })
})

//   正则验证