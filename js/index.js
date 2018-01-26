//轮播图
	var box = document.querySelector('.box');
	// var imgs = document.querySelectorAll('.pic');
	var pic = document.querySelector('.pic');
	var dot = document.querySelectorAll('.dot');
	var num=1;
	dots(num-1)
	setInterval(function(){
		num++;
		if(num>3){
			num=1;
		}
		pic.src='img/ban'+ num +'.jpg' 
		dots(num-1)
	},1000)
	function dots(a){
			for(var i=0;i<dot.length;i++){
				dot[i].style.background='white';
			}
			dot[a].style.background='black';
		}

//轮播图老方法
	// var index = 0;
	// var timer;
	// time()
	// function hideImg(a){
	// 	for(var i=0;i<imgs.length;i++){
	// 		imgs[i].style.display='none';
	// 		console.log(imgs)
	// 	}
	// 	imgs[a].style.display='block';
	// }
	// console.log(imgs)
	// function time(){
	// 	timer=setInterval (function(){
	// 		index++;
	// 		if(index>2){
	// 			index=0;
	// 		}
	// 		hideImg(index);
	// 	},1000)
	// }
	// 
//倒计时
	var spans = document.querySelectorAll('.cdown span')
	var spanx =document.querySelector('.count p span')
	var span1=spans[0]
	var span2=spans[2]
	var span3=spans[4]
	time()
	getTime()
	setInterval(function(){
		time()
		getTime()
	},1000)
//获取倒计时时间
	function time(){
		var date = new Date();
		var s = date.getTime()
		var date = new Date('2018/02/15');
		var t = date.getTime()
		var res = t-s;
		var a = 1000;
		var mm= a*60;
		var hh = mm*60
		var dd=hh*24
		var d = parseInt(res/dd);
		var h = parseInt(res%dd/hh);
		var min = parseInt(res%dd%hh/mm);
		var s = parseInt(res%dd%hh%mm/a);
		// span1.innerHTML = add0(h);
		span2.innerHTML = add0(min);
		span3.innerHTML = add0(s)
	}
	function getTime(){
		var date = new Date();
		var hour = date.getHours();
		spanx.innerHTML = add0(hour)
	}
	function add0(num){
		if(num>9){
			return num;
		}else{
			return '0'+num;
		}
	}

//搜索页面的js
//点击切换到搜索页面
//获取input标签
var swi = document.querySelector('#switch');
console.log(swi)
//获取替换页面
var replace = document.querySelector('.replace');
//获取返回标签
var back = document.querySelector('.back');
swi.onclick=function(){
	replace.style='display:block';
}
back.onclick=function(){
	replace.style='display:none';
}

//搜索出现历史记录
var replace = document.querySelector('.replace');
////获取搜索框
var rer = document.querySelector('.rer');
////获取搜索字样
var sser = document.querySelector('.sser');
//获取hisa div,用来盛放a标签
var hisa = document.querySelector('.hisa');
sser.onclick=function(){
	var Ha=document.createElement('a');
	// console.log(tt);
	// 获取input的value并写入a标签
	var tt = rer.value;
	Ha.innerHTML=tt;
	hisa.appendChild(Ha);
	//置空input
	rer.value = '';
}
replace.onclick=function(){
	replace.style.position='fixed';
}


//随机出现tag标签,热门搜索
// var tags = document.querySelectorAll('a');
var lis = document.querySelectorAll('li');
console.log(lis)
var ul = document.querySelector('ul');
var str ='';
hideA();
function hideA (){
	for(var j = 0;j<13;j++){
		var index = parseInt(Math.random()*lis.length);
		console.log(index)
		//有个问题，会出现内容相同的li标签，重合则不显示，就做不到显示10个
		lis[index].style.display ='block';
		str += lis[index];
	}
	// ul.appendChild(str);
}


//点击没款冬装等模块，跳转到列表页
//获取good里面所有的div
var doms = document.querySelectorAll('.good div');
var list;
for(var i=0;i<doms.length;i++){
	doms[i].onclick=function(){
		list=window.open('../newmogu/list.html');
	}
}


//点击商品，进入商品详情页
var goods = document.querySelectorAll('.goods');
var detail;
for(var j=0;j<goods.length;j++){
	goods[j].onclick=function(){
		detail=window.open('../newmogu/details.html');
	}
}
