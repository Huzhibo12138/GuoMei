// 搜索框1数据
var obj = new SearchData($('.searchOne'));

//排序方式切换效果
$('.sort>a').click(function() {
	$('.sort>a').removeClass('active');
	$(this).addClass('active');
});

// 定义地址初始值
var beginAddress = {
	province:'省份A',
	city:'城市A',
	county:'区县A',
	street:'街道A',
	status:'province'
}
$('.addressBox').click(function() {
	$('.box_two .list').fadeToggle();
});
$('.list_card').click(function(ev) {
	if(ev.target.className == 'close') {
		closeAddress();
	}
});
// 选择地址效果
$('.province').click(function() {
	creataAddress(address);
	changeStatus('province');
});
$('.city').click(function() {
	creataAddress(address[beginAddress.province]);
	changeStatus('city');
});
$('.county').click(function() {
	creataAddress(address[beginAddress.province][beginAddress.city]);
	changeStatus('county');
});
$('.street').click(function() {
	var str = beginAddress.county;
	creataAddress(address[beginAddress.province][beginAddress.city][beginAddress.county]);
	changeStatus('street');
});
$('.list_con').click(function(ev) {
	if(ev.target.tagName == 'SPAN') {
		var choose = ev.target.innerHTML;
		switch(beginAddress.status) {
			case 'province':
				beginAddress.province = choose;
				changeStatus('city');
				creataAddress(address[beginAddress.province]);
				break;
			case 'city':
				beginAddress.city = choose;
				changeStatus('county');
				creataAddress(address[beginAddress.province][beginAddress.city]);
				break;
			case 'county':
				beginAddress.county = choose;
				changeStatus('street');
				creataAddress(address[beginAddress.province][beginAddress.city][beginAddress.county]);
				break;
			case 'street':
				beginAddress.street = choose;
				closeAddress();
				break;
		}
	}
});
// 改变状态函数
function changeStatus(status) {
	$('.' + beginAddress.status).html( beginAddress[beginAddress.status] + '&nbsp;&gt;');
	beginAddress.status = status;
	$('.list_card li').removeClass('active');
	$('.' + status).addClass('active');
}
// 生成地址的函数
function creataAddress(source) {
	$('.list_con').html('');
	for(var attr in source) {
		var str = '<li><span>'+ attr +'</span></li>';
		$('.list_con').append($(str));
	}
}
// 关闭地址选择框
function closeAddress() {
	var str = beginAddress.province + ' ' + beginAddress.city + ' ' + beginAddress.county + ' ' + beginAddress.street;
	$('.addressBox').val(str);
	$('.box_two .list').fadeToggle();
}
