var PopUp=document.querySelectorAll(".display_image");
var btn=document.querySelectorAll(".select-img");

function reset(){
	for(i=0;i<6;i++){
		PopUp[i].style.display="none";
		btn[i].style.opacity=1;
	}
};
function show(){
	reset();	
	PopUp[0].style.display="block";
	btn[0].style.opacity=.7;
};
show();
for(let/* V.V.I*/ a=0;a<6;a++){
	btn[a].addEventListener("click",function(){
		reset();
		PopUp[a].style.display="block";
		btn[a].style.opacity=.7;
	})
}
//here must be use let variable because let is global selector popup will change through i variable.so seperately selcting the popup variable must be use let;