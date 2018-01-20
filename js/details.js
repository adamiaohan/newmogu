//获取当前时间
var date = new Date();
var y = date.getFullYear();
var m = date.getMonth() + 1;
var d = date.getDate();
var str= y+'-'+add0(m)+'-'+add0(d);
function add0(num){
	if(num>9){
		return num;
	}else{
		return '0'+num;
	}
}
//在span里面显示时间
var time = document.querySelector('.time');
time.innerHTML=str;



//点击快捷导航，出现遮罩层
//获取快捷导航
var moveup = document.querySelector('#moveup');
//获取遮罩层
var cover=document.querySelector('.cover');
var cdel=document.querySelector('.cdel');
var cright=document.querySelector('.cright');
//获取四个图标
var cones=document.querySelectorAll('.cone');
var first = cones[0];
var second = cones[1];
var third = cones[2];
var fourth=cones[3];
var scr = document.body.scrollTop || document.documentElement.scrollTop;
var evaluate = document.querySelector('.evaluate');
window.onload=function(){
	// 获取evaluate到顶部的高度
	et = evaluate.offsetTop;
	console.log(et)
}
moveup.onclick=function(){
	cover.style.display='block';
	cdel.style.display='block';
	moveup.style.display='none';
	cright.style='bottom:5.6rem;z-index:1000';
	first.style='bottom:12rem;opacity:1;filter:alpha(opacity=100);z-index:1000';
	second.style='bottom:9.2rem;opacity:1;filter:alpha(opacity=100);z-index:1000';
	third.style='bottom:6.4rem;opacity:1;filter:alpha(opacity=100);z-index:1000';
	fourth.style='bottom:3.6rem;opacity:1;filter:alpha(opacity=100);z-index:1000';
	// if(scr>=et){
	// 	first.style='bottom:12rem;opacity:1;filter:alpha(opacity=100);z-index:1000';
	// 	second.style='bottom:9.2rem;opacity:1;filter:alpha(opacity=100);z-index:1000';
	// 	third.style='bottom:6.4rem;opacity:1;filter:alpha(opacity=100);z-index:1000';
	// 	fourth.style='bottom:3.6rem;opacity:1;filter:alpha(opacity=100);z-index:1000';
	// 	cright.style='bottom:8.6rem;z-index:1000';
	// }
}
cdel.onclick=function(){
	cover.style.display='none';
	// cright.style='z-index:-10;opacity:0;filter:alpha(opacity=0)';
	first.style='bottom:0;opacity:0;filter:alpha(opacity=0);z-index:-1000';
	second.style='bottom:0;opacity:0;filter:alpha(opacity=0);z-index:-1000';
	third.style='bottom:0;opacity:0;filter:alpha(opacity=0);z-index:-1000';
	fourth.style='bottom:0;opacity:0;filter:alpha(opacity=0);z-index:-1000';
	moveup.style.display='block';
	cdel.style.display='none';
}



// 侧边栏： 屏幕滚动到一定位置，侧边栏向上移动，置顶出现
// 获取现在的侧边栏
var upbox = document.querySelector('.upbox');
var down = document.querySelector('#down');
var cright = document.querySelector('.cright');
var moveup = document.querySelector('#moveup');
var evaluate = document.querySelector('.evaluate');
var cdel=document.querySelector('.cdel');
var et = '';
window.onload=function(){
	// 获取evaluate到顶部的高度
	et = evaluate.offsetTop;
	console.log(et)
}
window.onscroll = function(){
	var scr = document.body.scrollTop || document.documentElement.scrollTop;
	//当页面高度大于evaluate到顶部的高度，侧边栏向上移动，置顶出现
	if(scr>=et){
		// moveup.style.bottom= '8.5rem';
		upbox.style.bottom= '5.5rem';
		down.style.display='block';
		cright.style.bottom='8.6rem';

	}else{
		down.style.display='none';
		// moveup.style.bottom= '5.5rem';
		upbox.style.bottom='2.5rem';
		cright.style.bottom='5.6rem';
	}
}



//加入购物车bu部分------------------------------------------------
//获取li标签
var lis=document.querySelectorAll('.colors');
var spec=document.querySelector('.spec');
var p=document.querySelector('.select p');
var already=document.querySelector('.already');
// 让其中一个li标签变色，其他不变
function hidecolor(a){
	for(var i=0;i<lis.length;i++){
		lis[i].className='colors';
	}
	lis[a].className='changes';
}
// 点击颜色对应的li标签变色
for(var j=0;j<lis.length;j++){
	lis[j].index=j;
	lis[j].onclick=function(){
		hidecolor(this.index);
		already.innerHTML='"'+ this.innerHTML+'"';
	}
}

//选中p标签 变色
var already1=document.querySelector('.already1');
var num =0;
p.onclick=function(){
	num++;
	// 点击次数为奇数时变色，同时写入选中规格的span标签里
	if(num%2!=0){
	 this.className='xp';
	 already1.innerHTML='"'+ this.innerHTML+'"';
	 // 偶数时返回
	}else {
		this.className='spec'
		already1.innerHTML='';
	}
	
}

//点击加号，数量+1，点击减号，数量-1
//获取加号，减号，数量
var minus = document.querySelector('.minus');
var add = document.querySelector('.add');
var coun = document.querySelector('.coun');
add.onclick=function(){
	coun.innerHTML =parseInt(coun.innerHTML) + 1;
	add.style.color='#ed4566';
}
minus.onclick=function(){
	
	if(parseInt(coun.innerHTML)>1){
		coun.innerHTML =parseInt(coun.innerHTML) - 1;
		minus.style.color='#ed4566';
	}else{
		return false;
	}
}

// 点击关闭按钮，整个页面向下滑动至消失

var blank = document.querySelector('.blank');
var shut = document.querySelector('.shut');
var addcush= document.querySelector('.addcush');
var cover2= document.querySelector('.cover2');
addcush.onclick=function(){
	blank.style.bottom=-2+ 'px';
	cover2.style.display='block';
}
shut.onclick=function(){
	blank.style.bottom='-20rem';
	cover2.style.display='none';
}

