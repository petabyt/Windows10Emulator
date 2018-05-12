var counter = 0; // Ensures no duplicates of items
function togglev(element) {
	if (document.getElementById(element).style.visibility == "hidden") {
		document.getElementById(element).style.visibility = "visible";
	} else {
		document.getElementById(element).style.visibility = "hidden"
	}
}
function popup(title,message) {
	var popup = document.createElement('DIV');
	popup.className = "popup";
	popup.id = 'popup'+counter;
	popup.innerHTML = "<div id='popuptitle"+counter+"' class='title'><span draggable='false'  class='title'>"+title+"</span><div class='close'></div><div class='maximize'></div><div class='minimize'></div></div><p class='message'>"+message+"</p>";
	popup.getElementsByClassName('close')[0].addEventListener("click", function() {
		this.parentElement.parentElement.outerHTML = "";
	});
	if (title == "2048") {
		popup.style = "left: 279.939px; top: 137.458px; width: 423px; height: 515px; background-color:#faf8ef;";
	}
	document.body.appendChild(popup);
	$("#popup"+counter).draggable({ handle:'#popuptitle'+counter, containment: 'window'});
	counter++
}
function icon(icon1,text,code) {
	var icon = document.createElement('DIV');
	icon.className = 'icon';
	icon.id = 'icon' + counter;
	icon.innerHTML = '<center><img src="assets/icons/'+icon1+'.png"><p>'+text+'</p></center>';
	icon.addEventListener("dblclick", code);
	document.getElementById('desktop').appendChild(icon);
	counter++
}
popup("Welcome to Windows CB","Welcome to Windows ChromeBook. Click the 'x' button to close this popup.");
icon("2048","2048",function() {
	popup("2048","<embed src='games/2048/index.html'>");
});
icon("2048","Platformer",function() {
	popup("Platformer",'<object width="480" height="360" data="games/PaintPlatformer.swf">whoops</object>');
});