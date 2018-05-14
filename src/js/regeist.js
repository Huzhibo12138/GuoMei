// 输入框为空验证,封装为函数
function check(obj,err,msg) {
	obj.on('focus',function() {
		if(obj.val() === '') {
			obj.css('border-color','#cbcbcb').next().css('display','block').css('color','#878787').text(msg);
		}else{

		}
	});
	obj.on('blur',function() {
		if(obj.val() === '') {
			obj.css('border-color','#fe5656').next().css('display','block').css('color','#fe5656').text(err);
		}else{
			obj.next().css('display','none');
		}
	});
}

// 提示信息
check($('.userId'),'请输入用户名','4-20个字符,支持汉字字母数字及"-""_"组合');
check($('.passwd'),'请输入密码','6-20个字符,建议由字母,数字,符号两种以上组成');
check($('.passwd2'),'请再次输入密码,必须与前一密码一致','请再次输入密码');
check($('.phone'),'请输入手机号','请输入您的手机号');
check($('.message'),'请输入短信验证码','请输入您的短信验证码');

// 滑动验证效果
$(function() {
	// 取消拖蓝
	$('.move').on('selectstart',function() {return false});
	// 滑块的移动效果
	var nowX = null;
	var width = null;
	$('.block').on('mousedown',function(ev) {
		nowX = ev.offsetX;
		$(document).on('mousemove',start);
		$(document).on('mouseup',end);
		// console.log(nowX);
		console.log(width);
	});
	function start(ev) {
		width = ev.pageX - $('.block').offsetParent().offset().left - nowX;
		if(width >= 250) {
			width = 250;
			$('.block').off('mousedown');
		}
		$('.block').css('left',width);
		$('.moveBg').css('width',width);
	}
	function end() {
		$(document).off('mousemove',start);
		if(width < 250) {
			$('.block').css({left:0},'slow');
			$('.moveBg').css({width:0},'slow');
			width = null;
		}
		nowX = null;
	}
});

// function drag() {
//     var obj = $('.block');
//     obj.bind('mousedown', start);
//     function start(e) {
//         var ol = obj.offset().left;
//         console.log(ol);
//         deltaX = e.pageX - ol;
//         $(document).bind({
//             'mousemove': move,
//             'mouseup': stop
//         });
//         return false;
//     }
//     function move(e) {
//     	console.log(e.pageX);
//         obj.css({
//             // "left": (e.pageX - deltaX)
//         });
//         return false;
//     }
//     function stop() {
//         $(document).unbind({
//             'mousemove': move,
//             'mouseup': stop
//         });
//     }
// }
// drag();