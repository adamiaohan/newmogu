// tag div里，点击里面的span标签，color和底部边框变色，其他不变
var tag =document.querySelector('.tag');
var olds =document.querySelectorAll('.old');
var goods1 =document.querySelectorAll('.goods1');
function hideold(a){
	for(var i=0;i<olds.length;i++){
		olds[i].className='old';
		goods1[i].style.display='none';
	}
	olds[a].className='new';
	goods1[a].style.display='block';
}
for(var j=0;j<olds.length;j++){
	olds[j].index=j;
	olds[j].onclick=function(){
		hideold(this.index);
	}
}



// 当屏幕向上滑到tag时，tag钉在屏幕最上面
var tag =document.querySelector('.tag');
var good =document.querySelector('.good');
var down = document.querySelector('#down');
//侧边栏，快捷导航向上滑动,置顶出现
var moveup = document.querySelector('#moveup');
//获取位置
var like = document.querySelector('.like');
var t ='';
var tp ='';
window.onload=function(){
	t = tag.offsetTop;
	tp=like.offsetTop;
	// console.log(tp)
}

window.onscroll = function(){
	var scr = document.body.scrollTop || document.documentElement.scrollTop;
	console.log(scr)
	if(scr>t){
		tag.style.position = 'fixed';
		tag.style.left = "0";
		tag.style.top = "0";
	} else{
		tag.style.position = 'static';
	}
	if(scr>500){
		moveup.style.bottom= 0;
		down.style.display='block';
		cright.style.bottom='21%';
	} else{
		moveup.style.bottom= 0;
		down.style.display='none';
		cright.style.bottom='9%';
	}
}



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
var scr2 = document.body.scrollTop || document.documentElement.scrollTop;
var like = document.querySelector('.like');
moveup.onclick=function(){
	cover.style.display='block';
	cdel.style.display='block';
	moveup.style.display='none';
	cright.style='z-index:1000';
	// bottom:3.6rem;
	first.style='top:-460%;opacity:1;z-index:1000';
	second.style='top:-350%;opacity:1;z-index:1000';
	third.style='top:-240%;opacity:1;z-index:1000';
	fourth.style='top:-130%;opacity:1;z-index:1000';
}
cdel.onclick=function(){
	cover.style.display='none';
	// cright.style='z-index:-10;opacity:0;filter:alpha(opacity=0)';
	first.style='bottom:0;opacity:0;z-index:-1000';
	second.style='bottom:0;opacity:0;z-index:-1000';
	third.style='bottom:0;opacity:0;z-index:-1000';
	fourth.style='bottom:0;opacity:0;z-index:-1000';
	moveup.style.display='block';
	cdel.style.display='none';
}