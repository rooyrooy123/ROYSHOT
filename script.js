window.onload = function(){
  for (let i = 1; i < 15; i++){
    document.getElementById("hideshow" + i).style.display ="none";
  }

}
function hideshow(classname){
	var hideshow = document.getElementsByClassName(classname)[0];
    
	if(hideshow.style.display=="block"){
		// 非表示
		hideshow.style.display ="none";
	}else{
		// 表示

		hideshow.style.display ="block";
	}
}
