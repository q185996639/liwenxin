if (location.hash) {
	var hash = location.hash;
	$(hash).show().siblings().hide();
	console.log(1)//我是2.0
}
window.onhashchange = function(){
	var hash = location.hash;
	$(hash).show().siblings().hide();
}