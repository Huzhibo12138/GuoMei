// 轮播图1启动
$('#carousel-example-generic-1').carousel({
  interval: 2000
});

// 搜索框1数据
var obj = new SearchData($('.searchOne'));

// 顶部下拉效果
header();

// 吸顶效果,加左边侧边栏
$('body').scrollspy({ target: '#leftBar' });
document.onscroll = function (ev) {
	if($(window).scrollTop() >= 600) {
		$('.topBar').slideDown();
	}else{
		$('.topBar').slideUp();
	}
	if($(window).scrollTop() >= 1900) {
		$('.leftBar').slideDown();
	}else{
		$('.leftBar').slideUp();
	}
}