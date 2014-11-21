

document.addEventListener("DOMContentLoaded", function(){
	
	var buttons = document.querySelectorAll(".btn");

	console.log(buttons);
	
for(var i = 0; i < buttons.length; i++){
	buttons[i].addEventListener("click", function(){
		this.style.backgroundColor="red";
	});
	buttons[i].addEventListener("mouseover", function(){
		this.style.backgroundColor="aqua";
	});
buttons[i].addEventListener("mouseout", function(){
		this.style.backgroundColor="yellow";
	});

	}
});
console.log("end of main.js");