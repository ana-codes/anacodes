function openNav(){
  document.getElementById('mySidebar').style.width = "30vh";
  document.getElementById('mySidebar').style.opacity = "0.9";
  document.getElementById('ul').style.opacity = "1";
  document.getElementById('page-content').style.marginLeft="30vh";
  document.getElementById('page2-content').style.marginLeft="30vh";
  document.getElementById('navBtn').style.opacity="0";
  document.getElementById('closeNav').style.opacity="0.6";
}
function closeNav(){
	document.getElementById('mySidebar').style.width = "0px";
	document.getElementById('mySidebar').style.opacity = "0";
	document.getElementById('ul').style.opacity = "0";
	document.getElementById('page-content').style.marginLeft="0";
	document.getElementById('page2-content').style.marginLeft="0";
	document.getElementById('navBtn').style.opacity="1";
	document.getElementById('closeNav').style.opacity="0";
}
function initialHide(){
  document.getElementById('readMore').style = 'display:none';
  console.log('SHOULD BE HIDDEN');
}
function readMore(){
	document.getElementById('readMore').style = 'display:inline'
	document.getElementById('moreBtn').style = 'display:none'
}
// scrollpos document.documentElement.scrollTop
var maxScroll = document.body.clientHeight * 0.61;
var r = 238; // 189
var g = 235; // 230
var b = 118; // 226
var rb = 255;
var gb = 229;
var bb = 185;
document.getElementById('topbar').style = `background: linear-gradient(90deg, rgba(${r},${g},${b},1) 8%, rgba(${rb},${gb},${bb},1) 100%);`;
var lastScrollTop = window.pageYOffset;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
    if(b<226){
    	b+= 2;	
    }
    if (r>189){
		r+= -2;
    }
    if (bb<194){
    	bb+= 2;
    }
	if (rb>240){
		rb+= -2;	
	}
	document.getElementById('topbar').style = `background: linear-gradient(90deg, rgba(${r},${g},${b},1) 8%, rgba(${rb},${gb},${bb},1) 100%);`;
   } else {
   	if (b>118){
   		b+= -2;
   	}
   	if (r<238){
   		r+= 2;
   	}
   	if (bb>185){
   		bb+= -2.4;	
   	}
   	if (rb<255){
		rb+= 3;	
   	}
      // upscroll code
    document.getElementById('topbar').style = `background: linear-gradient(90deg, rgba(${r},${g},${b},1) 8%, rgba(${rb},${gb},${bb},1) 100%);`;
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

document.querySelector('body').addEventListener('click', console.log('clicky'));
initialHide();

