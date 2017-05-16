window.onload = function(){
	var look = document.getElementsByClassName("look");
	var zhez = document.getElementsByClassName("zhezhao")[0];
	var shut = document.getElementById('shut');
	for (var i=0;i<look.length;i++) {
		look[i].onclick = function(){
			zhez.style.display = "block";
		}
	}
	shut.onclick = function(){
		zhez.style.display = "none";
	}
}
