//轮播
window.onload=function(){
	var btns=document.getElementsByClassName("btn");
	var bg=document.getElementsByClassName("tupian-box");
	var bgcolor=document.getElementsByClassName("banner-box")[0];
	var color=["#8b0b0a","#e8e8e8","#2cb1f6","#fff613","#00baff","#e8e8e8"]
	for (var i = 0; i < btns.length; i++) {
	   	btns[i].index=i;
	   	// 给每一个按钮对象添加一个index属性 值为它在集合中的下标
	   	btns[i].onmouseover=function(){
	   		num=this.index;
	   	for (var i = 0; i < btns.length; i++) {
	        btns[i].style.borderColor="#ccc";
	        btns[i].style.backgroundColor="#ccc";
	   		bg[i].style.zIndex=1;
	   		btns[i].style.opacity="1"
	   	};
	   	 bg[this.index].style.zIndex=2;
	   	 this.style.borderColor="#555";
	   	 this.style.backgroundColor="#999";
	   	 this.style.opacity="0.8"
	   	 bgcolor.style.backgroundColor=color[this.index];
	   	}
	   	   
	   };  

	var num=0;
	var house=setInterval(move,2000);
	function move(){
		num++;
		if (num==btns.length) {
			num=0;
		};
		for (var i = 0; i < btns.length; i++) {
	        btns[i].style.borderColor="#ccc";
	        btns[i].style.backgroundColor="#ccc";
	   		bg[i].style.zIndex=1;
	   		btns[i].style.opacity="1";
	   	};
	   	 bg[num].style.zIndex=2;
	   	 btns[num].style.borderColor="#555";
	   	 btns[num].style.backgroundColor="#999";
	   	 btns[num].style.opacity="0.8"
	   	 bgcolor.style.backgroundColor=color[num];
	}
    bgcolor.onmouseover=function(){
            clearInterval(house);
    }
    bgcolor.onmouseout=function(){
    	house=setInterval(move,2000);
    }
  
  var content=getClass("content-type-right1");
  var img=getClass("content-index");
  for (var i = 0; i < content.length; i++) {
  	    lunbo(content[i],img[i])
  };
  function lunbo(content,img){
  	content.onmouseover=function(){
  	        animate(img,{top:-12},200);
  			img.style.display="block"
  }
    content.onmouseout=function(){
    animate(img,{top:0},200);
    img.style.display="none"
  }
}
 
 var topbn=$(".yincang-top-box")[0];
 var leftbn=$(".left-box")[0];
 document.documentElement.scrollTop=1;
 if(document.documentElement.scrollTop==1){
 var scrollobj=document.documentElement;
}else{
	var scrollobj=document.body;
}
 var flag=true;
 var flag2=true;
 window.onscroll=function(){
 	var st=scrollobj.scrollTop;
 	if(st>650){
 		if(flag){
 			flag=false;
 			flag2=true
    animate(topbn,{top:0})
    animate(leftbn,{width:35,height:370})
}
 	}else{
 		if (flag2) {
 			flag2=false
 			flag=true
 		
 		animate(topbn,{top:-50})
    animate(leftbn,{width:0,height:0})
 	}
 }
}  

  //左边楼层跳转 
  var shangping=$(".shangping1-box");
  var leftbtns=$(".left-xia0");
  var hand=$(".hand-box")[0];
  var leftlove=$(".left-xia1")[0];
  var love=$(".love-box")[0];
  var lefttop=$(".left-xia2")[0];
  for (var i = 0; i < leftbtns.length; i++) {
  	leftbtns[i].index=i;
  	leftbtns[i].onclick=function(){
  		var ot=shangping[this.index].offsetTop;
  		animate(scrollobj,{scrollTop:ot})
  	}
  }
  leftlove.onclick=function(){
  	var ob=love.offsetTop;
  	animate(scrollobj,{scrollTop:ob})
  }
   lefttop.onclick=function(){
  	var oc=hand.offsetTop;
  	animate(scrollobj,{scrollTop:oc})
  }
  var lh=love.offsetTop;
  
  var ot=[]
  var colors=["rgb(100,195,51)","rgb(100,195,51)","rgb(100,195,51)","rgb(100,195,51)","rgb(100,195,51)","rgb(100,195,51)"]
    for (var i = 0; i < shangping.length; i++) {
       ot.push(shangping[i].offsetTop)
    }
     function tz(){

    for (var j = 0; j < shangping.length; j++) {
      leftbtns[j].style.backgroundColor=""
      if (scrollobj.scrollTop>ot[j]-200&&scrollobj.scrollTop<lh-500) {

         for (var i = 0; i < leftbtns.length; i++) {
           leftbtns[i].style.backgroundColor="";
         }
         leftbtns[j].style.backgroundColor=colors[j]
      }
    }
    }
    addEvent(window,"scroll",tz)
    function tz2(){

        if (scrollobj.scrollTop>lh-500) {
            leftlove.style.opacity="0.9"

        }
        if (scrollobj.scrollTop<lh-500) {leftlove.style.opacity=""}
  }
  addEvent(window,"scroll",tz2)
  
  var items=$(".right-item");
  var names=$(".right-name");
  var t;
  for (var i = 0; i < items.length; i++) {
    items[i].index=i;
    hover(items[i],function(){
      var that=this;
      clearTimeout(t);
      t=setTimeout(function(){
      names[that.index].style.display="block";
      animate(names[that.index],{left:-90,opacity:1},300)},300)
    },function(){
      clearTimeout(t)
      animate(names[this.index],{left:-120,opacity:0.6},300,function(){
        this.style.display="none";
      })
    })
}
  


//推荐 鼠标碰到 图片放大
var tuijianbox=$(".tuijianbox");
var tuijian=$(".tuijian-con");
for (var i = 0; i < tuijian.length; i++) {
  tuijian[i].index=i;

hover(tuijian[i],function(){
      animate(tuijianbox[this.index],{height:150,width:150,left:-5,top:-10},400) 
},function(){
   animate(tuijianbox[this.index],{height:133,width:133,left:0,top:0},400)
 }) 
}

//头部下拉导航
var shoucang=$(".hand-right4")[0];
var hand_right4=$(".hand-right4-1")[0];
hover(shoucang,function(){
  hand_right4.style.display="block"
},function(){
   hand_right4.style.display="none"
})


var shouji=$(".hand-right5")[0]
var hand_right5=$(".hand-right5-1")[0];
hover(shouji,function(){
  hand_right5.style.display="block"
},function(){
  hand_right5.style.display="none"
})


var bz=$(".hand-right8")[0]
var hand_right8=$(".hand-right8-1")[0];
hover(bz,function(){
  hand_right8.style.display="block"
},function(){
  hand_right8.style.display="none"
})


var dh=$(".hand-right9")[0]
var hand_right9=$(".hand-right9-1")[0];
hover(dh,function(){
hand_right9.style.display="block"
},function(){
  hand_right9.style.display="none"
})


var tb=$(".hand-right1")[0]
var hand_right1=$(".hand-right1-1")[0];
hover(tb,function(){
  hand_right1.style.display="block"
},function(){
  hand_right1.style.display="none"
})  

 //左侧侧拉
 var  l=$(".gld")
 var  lr=$(".banner-left1-1")
 for (var i = 0; i < l.length; i++) {
  l[i].index=i
   hover(l[i],function(){
    lr[this.index].style.display="block"
   },function(){
    lr[this.index].style.display="none"
   })
 };


        //遮罩
var remenb=$("li",$(".remen-zhong-zhong")[0])
var remenl=$(".remen-1");
for (var i = 0; i < remenb.length; i++) {
  remenb[i].index=i
   hover(remenb[i],function(){
    remenl[this.index].style.display="block"
   },function(){
    remenl[this.index].style.display="none"
   })
 };


//right效果
var rightbtn=$(".rightbtn");
var right=$(".right-innerbox");
   for (var i = 0; i < rightbtn.length; i++) {
    rightbtn[i].index=i;
    hover(rightbtn[i],function(){
      right[this.index].style.display="block"
     animate(right[this.index],{left:-78},500)
    },function(){
      animate(right[this.index],{left:-98},500,function(){
        this.style.display="none"
      })
    })
    
   }
//按需加载
// var floor=$(".floor");
// 	var ot=[];	
// 	var Doc=document.documentElement;
// 	var ht=Doc.clientHeight;
// 	Doc.scrollTop=1;
// 	if(Doc.scrollTop=!1){
// 		Doc=document.body;
//  	}
//  	for (var i = 0; i < floor.length; i++) {
//  		ot.push(floor[i].offsetTop)
//  		console.log(ot)
//  	}

//  	window.onscroll = function(){
//  		var sc=Doc.scrollTop;
//  		document.title=sc;
//  		for (var i = 0; i < floor.length; i++) {
//  			var imgs=$("img",floor[i]);

//  			if (sc+ht>ot[i]) {
//  				for (var j = 0; j < imgs.length; j++) {
//  					imgs[j].src=imgs[j].getAttribute("asrc")
//  				}
//  				imgs[i].setAttribute('flag',true)
//  			}

//  		}





}