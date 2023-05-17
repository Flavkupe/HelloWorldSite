var position = 0;

var box = document.getElementById("box");
var leftButton = document.getElementById("leftButton");
var rightButton = document.getElementById("rightButton");

leftButton.onclick = function() {
	position = position - 5;
  box.style.left = position + "px";
}

rightButton.onclick = function() {
	position = position + 5;
  box.style.left = position + "px";
}
