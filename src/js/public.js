// 1.cross origin to get data for search box by jquery
function SearchData(obj) {
	// 获得元素
	this.input = obj.find('.text');
	this.btn = obj.find('.submit');
	this.showBox = obj.find('.showBox');
	// 给输入框添加事件
	this.input.on('keyup',function() {
		//获得输入框的值
		var value = this.input.val();
		// 定义地址
		var url = 'https://apis.gome.com.cn/p/suggest?from=headSearch&module=searchSuggest&query='+ value +'&jp=true&user=75748237143&callback=?';
		// 发起ajax请求
		$.getJSON(url,this.handelData);
	}.bind(this));

	this.input.on('blur',function() {
		this.showBox.css('display','none');
	}.bind(this));

	this.input.on('focus',function() {
		this.showBox.css('display','block');
	}.bind(this));

	this.handelData = function(data) {
		this.showBox.find('ul').text('');
		$(data).each(function(k,v){
			var msg = '<li><a href="javascript:;">'+ v[0] +'<span>约'+ v[1] +'条</span></a></a></li>';
			this.showBox.find('ul').append($(msg));
		}.bind(this));
	}.bind(this);
}
// header的导航效果
function header() {
	$('.header_left>li,.header_right>li').on('mouseover',function() {
		if($(this).find('>ul')) {
			$(this).find('>ul').css('display','block');
		}
	});
	$('.header_left>li,.header_right>li').on('mouseleave',function() {
		if($(this).find('>ul')) {
			$(this).find('>ul').css('display','none');
		}
	});
}