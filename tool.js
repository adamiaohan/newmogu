
//显示时间
var str
	function time(){
	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var min = date.getMinutes();
	var s = date.getSeconds()
		str='时间'+ ':' + y +'/' + add0(m) + '/' + add0(d) +' '+ add0(h) +':' +add0(min) +':' +add0(s);
		return str;
	}
	
	function add0(num){
		if(num>9){
			return num;
		}else{
			return '0'+num;
		}
	}

	//轮播图
	var timer;
	(function(){
		var img= document.querySelector('img');
		var num = 1;
		var timer=setInterval(function(){
			num++;
			if(num>3){
				num = 1
			}
			img.src = '../picture/image'+num+'.png'
		},1000)

		!function(){
			var btn = document.querySelector('button');
			btn.onclick = function(){
				clearInterval(timer)
			}
		}()
	})()



	//倒计时
	time()
	function time(){
		var dat = new Date()
		var s = dat.getTime()  //1514528305304
		var dar = new Date('2018/02/06');
		// var dar = new Date(2018/02/06);
		var t = dar.getTime()   //1514528556983

		var res = t-s;
		var a = 1000;
		var b = 60*a;
		var c=60*b;
		var d = 24*c;
		var f = 31*d;
		var m = parseInt(res/f);
		var day = parseInt(res%f/d);
		var hours = parseInt(res%f%d/c);
		var min = parseInt(res%f%d%c/b);
		var se = parseInt(res%f%d%c%b/a);

		var str = '距离放假时间：'+m+'-'+day+' '+hours+':'+min+':'+se

		document.querySelector('p').innerHTML = str
	}
	
	setInterval(time,1000)

	// console.log(s)