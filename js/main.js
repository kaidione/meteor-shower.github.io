var img=document.getElementById("i1")
var n=1;
setInterval(function(){
//	alert(n);
//	n++;
	if(n>3) n=1;
	img.innerHTML="<img src='yt/yt"+n+".png'/>";
	n++;
},2000);
