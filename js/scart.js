// 点击选中商品，商品前面圆圈变红，同时商铺和footer的圆圈也变红
// 获取圆圈的div
var seles = document.querySelectorAll('.sele')
console.log(seles)
var num = 0;
// var sele1=seles[0];
// var sele1=seles[0];
// var sele1=seles[0];
for(var i=0;i<seles.length;i++){
	seles[i].onclick=function(){
		num++;
		for(var j = 0; j < seles.length; j++){
			if(num%2==1){
				seles[j].style = 'background:url(img/checkbox.png) 0 5px no-repeat;background-size: 80%';
			} else {
				seles[j].style = 'background:url(img/checkbox.png) 0 160% no-repeat;background-size: 80%';
			}
		}
	}
}
