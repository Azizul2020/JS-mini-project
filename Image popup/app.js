var btn=document.querySelectorAll(".mainImg");
var popUp=document.querySelectorAll(".popup");
var displayArea=document.querySelector(".display_part");
var close=document.querySelector(".close");


function reset(){
	displayArea.style.display="none";
	for(let a=0;a<5;a++){
		
		popUp[a].style.display="none";
	}
};
reset();
for(let i=0;i<5;i++){
	
	btn[i].addEventListener("click",function(){
		reset();/*If i don't use reset here,any image can show because first must be need to remove all image */
		displayArea.style.display="block";
		popUp[i].style.display="block";
	})
}
close.addEventListener("click",function(){
	displayArea.style.display="none";
});

