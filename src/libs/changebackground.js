 function changebackground(a,b){
           var bchangebackground=document.getElementsByClassName(b);
           var acb=document.getElementsByClassName(a);

            for (let c=0;c<bchangebackground.length;c++) {
            	  
		            
		        	bchangebackground[c].onmouseenter=function(){
		        		acb[c].style.background="#878787";
		        	}.bind(this)
		        	bchangebackground[c].onmouseleave=function(){
		        		acb[c].style.background="none";
		        	}.bind(this)
     		        	
		        
            }
  }          