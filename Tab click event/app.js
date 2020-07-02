var btn=document.querySelectorAll(".btn");
var tabs=document.querySelectorAll(".tab");
function reset(){
	for(i=0;i<tabs.length;i++){
		tabs[i].style.display='none';
		btn[i].style.background="orange";
	}
}
function one(){
	reset();
	tabs[0].style.display="block";
	btn[0].style.background="black";
}one();
for(let a=0;a<5;a++){
	
	btn[a].addEventListener("click",function(){
		reset();
	tabs[a].style.display="block";
	btn[a].style.background="black";
	})	
}
