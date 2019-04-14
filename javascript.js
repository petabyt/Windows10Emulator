var z = {
	mouseOn: "nothing",
	mouseDown: false,
	x: 0,
	y: 0,
	xd: 0,
	yd: 0
}

// Start stuff
window.onload = function() {
	var start = document.getElementById('startMenu');
	start.style.display = "none";

	popup("Welcome", "Windows 10 Emulator");

	setInterval(function() {
		if (z.mouseOn !== "nothing") {
			z.yd = z.x - z.mouseDown.offsetLeft;
			z.xd = z.y - z.mouseDown.offsetTop;
			if (z.mouseDown) {
				z.mouseOn.parentElement.style.top = (z.y - 20) + "px";
				z.mouseOn.parentElement.style.left = (z.x - 50) + "px";
			}
		}
	}, 1);
}

// Start Button Toggle
document.getElementById('startButton').onclick = function() {
	var start = document.getElementById('startMenu');
	if (start.style.display == "none") {
		start.style.display = "block";
	} else {
		start.style.display = "none";
	}
}

function popup(title, text) {
	document.getElementsByTagName('body')[0].innerHTML += `
	<div class="popup">
		<div class="title" onmouseover="z.mouseOn = this" onmouseleave="` + function() {
			if (!z.mouseDown) {
				z.mouseOn = 'nothing'
			}
		} + `">
			<p>` + title + `</p>
			<div class="close" onmouseover="` + function() {
				this.parentElement.parentElement.innerHTML = '';
			} + `"></div>
			<div class="maximize"></div>
			<div class="minimize" onclick="this.parentElement.ParentElement.outerHTML = '';"></div>
		</div>
		<div class="content">
		` + text + `
		</div>
	</div>
	`;
}

function getMouse(event) {
	z.y = event.clientY;
	z.x = event.clientX;
}