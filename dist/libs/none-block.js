function noneblock(a,b){
	var a=document.getElementsByClassName(a);
	var b=document.getElementsByClassName(b);
	for (let i=0;i<a.length;i++) {
		
		b[i].onmouseenter=function(){
			a[i].style.display="block";
			
		    if(10>i&&i>2){
			    a[i].style.left=-(i-3)*103+"px";
                for (j=10;j<16;j++) {
                	b[j].style.top=b[j].offsetHeight+60+"px";
                }
  
                a[2].style.bottom+=60+"px";
		    }
		    if(16>i&&i>9){
		    	a[i].style.left=-(i-10)*103+"px"; 
		    }
		}.bind(this)	 	
		b[i].onmouseleave=function(){
			for (j=10;j<16;j++) {
                	b[j].style.top=b[j].offsetHeight+"px";
                 
                }
			a[i].style.display="none"
		}.bind(this)
	}
}
