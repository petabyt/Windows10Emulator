// Start stuff
window.onload = function() {
	var foo = document.getElementById('startMenu');
	foo.style.display = "none";
}

// Start Button Toggle
document.getElementById('startButton').onclick = function() {
	var foo = document.getElementById('startMenu');
	if (foo.style.display == "none") {
		foo.style.display = "block";
	} else {
		foo.style.display = "none";
	}
}