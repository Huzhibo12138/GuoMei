var province = ['省份A','省份B','省份C','省份D','省份E','省份F','省份G','省份H','省份I','省份G','省份K','省份G','省份L','省份M','省份N','省份O','省份P','省份Q','省份R','省份S','省份T','省份U','省份V','省份W','省份X','省份Y','省份Z'];
var city = ['城市A','城市B','城市C','城市D','城市E','城市F','城市G','城市H','城市I','城市G','城市K','城市G','城市L','城市M','城市N','城市O','城市P','城市Q','城市R','城市S','城市T','城市U','城市V','城市W','城市X','城市Y','城市Z'];
var county = ['区县A','区县B','区县C','区县D','区县E','区县F','区县G','区县H','区县I','区县G','区县K','区县G','区县L','区县M','区县N','区县O','区县P','区县Q','区县R','区县S','区县T','区县U','区县V','区县W','区县X','区县Y','区县Z'];
var street = ['街道A','街道B','街道C','街道D','街道E','街道F','街道G','街道H','街道I','街道G','街道K','街道G','街道L','街道M','街道N','街道O','街道P','街道Q','街道R','街道S','街道T','街道U','街道V','街道W','街道X','街道Y','街道Z'];

var address = {};

for(var i = 0; i < province.length; i++) {
	address[province[i]] = {};
	for(var j = 0; j < city.length; j++) {
		address[province[i]][city[j]] = {};
		for(var k = 0; k < city.length; k++) {
			address[province[i]][city[j]][county[k]] = {};
			for(var l = 0; l < city.length; l++) {
				address[province[i]][city[j]][county[k]][street[l]] = {};
			}
		}
	}
}