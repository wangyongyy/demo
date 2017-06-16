


window.onload=function(){
	
	var divs = document.querySelectorAll('div');
	document.addEventListener('click',function(e){
		move(divs[0],e);
		setTimeout(function(){
			move(divs[1],e)
		},100);
		setTimeout(function(){
			move(divs[2],e);
		},200);
	});
	
	
	function move(obj,e){
		var opacity = 100;
		var timer = setInterval(function(){
			var left = e.clientX-obj.offsetWidth/2+'px';
			var top = e.clientY-obj.offsetHeight/2+'px';
			obj.style.display='block';
			obj.style.width = obj.offsetWidth+5+'px';
			obj.style.height=obj.offsetHeight+5+'px';
			obj.style.left = left;
			obj.style.top = top;
			obj.style.opacity = (opacity-=5)/100;
			if(opacity<=0){
				clearInterval(timer);
				obj.style.width = '10px';
				obj.style.height='10px';
				obj.opacity = 1;
			}
		},16);
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	/*var divs = document.querySelectorAll('div');
	document.addEventListener('mousedown',function(e){
		move(divs[0],e);
		setTimeout(function(){
			move(divs[1],e);
		},100);
		setTimeout(function(){
			move(divs[2],e);
		},200);
		
	})
	
	function move(obj,e){
		
		var opacity=100;
		var timer = setInterval(function(){
			var left=e.clientX-obj.offsetHeight/2+'px';
			var top = e.clientY-obj.offsetWidth/2+'px';
			obj.style.display='block';
			obj.style.left=left;
			obj.style.top=top;
			obj.style.width = obj.offsetWidth+5+'px';
			obj.style.height=obj.offsetHeight+5+'px';
			obj.style.opacity = (opacity-=5)/100;
			
			if(opacity<=0){
				clearInterval(timer);
				obj.style.width='10px';
				obj.style.height='10px';
			}
			
		},16);
	}
	*/
	
	
	
	
}
