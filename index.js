
window.onload = function() {
	document.getElementById("funbutton").onclick = function() {mushroomMode()};
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var colorMarker = 0;
var colorInterval;

function mushroomMode() {
	if (colorMarker <= 0) {
		colorMarker = 1;
		colorInterval = setInterval(changeColor, 10);
	}
	else {
		clearInterval(colorInterval);
		colorMarker = 0;
		document.body.style.background = "white";
	}
}

function changeColor() {
	var x, y, z;
	colorMarker++;
	
	x = Math.min(colorMarker % 256, 256-colorMarker%256);
	y = Math.min ( (colorMarker + 80) % 256, 256-(colorMarker + 80) % 256);
	z = Math.min ( (colorMarker + 160) % 256, 256-(colorMarker + 160) % 256);
	
	var color = "rgb(" + x + "," + y + "," + z + ")";
	document.body.style.background = color;
}