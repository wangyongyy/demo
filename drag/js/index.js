


window.onload=function(){
	var box = document.getElementById('box');
	
	var disX;
	var disY;
	box.onmousedown=function(e){
		disX=e.clientX-box.offsetLeft;
		disY=e.clientY-box.offsetTop;
		
		//console.log('窗口宽度：',window.innerWidth);
		//console.log('左边边距：',box.offsetLeft);
		console.log(top);
		
		
		document.onmousemove=function(e){
			var left = e.clientX-disX;
			var top = e.clientY-disY;
			box.style.top=top+'px';
			box.style.left=left+'px';
			if(left<0){
				box.style.left=0;
			}else if(left>window.innerWidth-box.offsetWidth){
				box.style.left=window.innerWidth-box.offsetWidth+'px';
			}
			if(top<0){
				box.style.top=0;
			}else if(top>window.innerHeight-box.offsetHeight){
				box.style.top=window.innerHeight-box.offsetHeight+'px';
			};
			
		};
		document.onmouseup=function(e){
			//box.onmousedown=null;
			document.onmousemove=null;
		}
		return false;
	};
	
	
}
