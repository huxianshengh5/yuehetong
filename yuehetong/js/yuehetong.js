
//导航下拉开关
$('.rt').click(function(){
	if(!$(".nav-Rt").is(':animated')){
		$('.nav-Rt').slideToggle();
		return false;
	}
})
$(document).click(function(){
	$(".nav-Rt").slideUp();
})
$(window).resize(function(){
	$(".nav-Rt").hide();
})
	// a标签组织冒泡
$("a").click(function(event){
	event.stopPropagation();
})
// 返回顶部
$(function(){
	$("#goToTop").hide()//隐藏go to top按钮
	$(function(){
		$(window).scroll(function(){
			if($(this).scrollTop()>100){//当window的scrolltop距离大于100时，go to top按钮淡出，反之淡入
				$("#goToTop").fadeIn();//渐显
			} else {
				$("#goToTop").fadeOut(); //渐没
			}
		});
	});
	// 给go to top按钮一个点击事件
	$("#goToTop ").click(function(){
		$("html,body").animate({scrollTop:0},800);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
		return false;
	});
});
//  二维码显示隐藏 
$(function(){
	$(".weixin").mouseover(function(){
		$(this).hide().next('.weixinkefu').show().next('.erweima').show();
		
	})
	$('.weixinkefu').mouseout(function(){
		$(this).hide().siblings('.weixin').show().siblings('.erweima').hide();
	})
})
// 企业背景放大
$(function(){
	$(".qiyebj img").mouseover(function(){
		// $(this).animate("")
		$(this).css("transform","scale(1.08)");
	}).mouseout(function(){
		$(this).css("transform","scale(1)");
	})
})
//悦合同合作方 方法
$(function(){
	$(".hezuobj img").mouseover(function(){
		$(this).css("transform","scale(1.08)");
	}).mouseout(function(){
		$(this).css("transform","scale(1)");
	})
})

// 登录 注册
$(function(){
	$(".denglu").click(function(){
	//    $(".container__denglu").css("display","block");
	   $(".container__denglu").modal('show');
	//    $(document).css("background-color","#ccc");
   })
   $(".x").click(function(){
	//    $(".container__denglu").hide();
	//    $(document).css("background-color","#ccc").hide();
	$(".container__denglu").modal('hide');
	   
	   
   })
//    $(document).click(function(){
// 	$(".container__denglu").modal('hide');
	
//    })
})
// 点击账号切换到密码
$(function(){
   $(".btn2").click(function(){
	   $(".yc1").css("display","block");
	   $(".yc2").css("display","none");
	   $(".btn1").css("color","#999").css("border-bottom","none");
	   $(".btn2").css("color","#2fb4e9").css("border-bottom","2px solid #2fb4e9");
	   $(".shoujicuowu").css("display","none");
	   $(".yzpass").css("display","none");
	   $("#J_getCode").html("获取验证码").css("color","#333");
   })
})
// 点击切换到快速登录 ／免费加入页面
$(function(){
   $(".btn1").click(function(){
	   $(".yc1").css("display","none");
	   $(".yc2").css("display","block");
	   $(".btn2").css("color","#999").css("border-bottom","none");
	   $(".btn1").css("color","#2fb4e9").css("border-bottom","2px solid #2fb4e9");
	   $(".shoujicuowu").css("display","none");
	   $(".yzpass").css("display","none");
	   $("#J_getCode").html("获取验证码").css("color","#333");
	   
	   
   })
})


// 倒计时
/*获取验证码*/
var isPhone = 1;

function getCode(e) {
    checkPhone(); //验证手机号码
    if (isPhone) {
        resetCode(); //倒计时
    } else {
        $('#phone').focus();
    }
}
//验证手机号码
function checkPhone() {
    var phone = $('#phone').val();
    var pattern = /^1[0-9]{10}$/;
    isPhone = 1;
    if (phone == '') {
        alert('请输入手机号码');
        isPhone = 0;
        return;
    }
    if (!pattern.test(phone)) {
        alert('请输入正确的手机号码');
        isPhone = 0;
        return;
    }
}
//倒计时
function resetCode() {
    $('#J_getCode').hide();
    $('#J_second').html('60');
    $('#J_resetCode').show();
    var second = 60;
    var timer = null;
    timer = setInterval(function() {
        second -= 1;
        if (second > 0) {
            $('#J_second').html(second);
        } else {
            clearInterval(timer);
            $('#J_getCode').show();
            $('#J_resetCode').hide();
        }
    }, 1000);
}
// 正则验证

$(function(){
	// 验证手机号
	$("#phone").blur(function(){
		if($(this).val().match(/^1(4[57]|7[0135678]|[358][0-9])\d{8}$/)){
			$(".shoujicuowu").show().html("手机号可用").css("color","blue");
			// $(this).css("background","red")
			return true;
		}else{
			
			$(".shoujicuowu").show().html("手机号有误").css("color","red")
			return false;
		}
		
	})
	// 验证六位验证码
	$(".liuweiyzm").blur(function(){
		if(!$(this).val().match(/^\d{6}$/)){
			$("#J_getCode").html("验证码错误").css("color","red");
			return false;
		}else{
			$("#J_getCode").html("验证成功").css("color","＃333");
			return true;
		}
	})
// 验证 手机 邮箱
	$(".sjyx").blur(function(){
		if(($(this).val().match(/^[\w-]{4,20}@[a-zA-Z0-9]{2,12}(\.[a-z]+){1,3}$/)) || ($(this).val().match(/^1(4[57]|7[0135678]|[358][0-9])\d{8}$/))){
			$(".shoujicuowu").show().html("可用使用").css("color","blue");
			return true;
		}else{
			$(".shoujicuowu").show().html("您的输入有误！").css("color","red");
			return false;
			
		}
	})	
	// 验证密码
	$(".PASS").blur(function(){
		if($(this).val().match(/^[\w_]{6,12}$/)){
			$(".yzpass").show().html("验证通过").css("color","blue");
			return true;
		}else{
			$(".yzpass").show().html("验证失败").css("color","red");
			return false;
		}
	})
		

})
// *******************************************


