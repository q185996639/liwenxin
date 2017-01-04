var searchObj = {
	name : '地址搜索页',
	dom : $('#address'),
	init:function(){
		this.bindEvent()
	},
	bindEvent:function(){
		console.log('绑定事件')	
	},
	enter:function(){
		this.dom.show();
	},
	leave:function(){
		this.dom.hide();
	}
}