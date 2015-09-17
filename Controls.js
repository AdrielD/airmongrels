function Controls() {
	this.left: false,
	this.right: false,
	this.top: false,
	this.down: false,
	this.z: false,

	document.addEventListener('keydown', function(event) {
		switch(event.keyCode) {
			case 90:
				event.preventDefault();
				z = true;
				break;
			case 37: 
				event.preventDefault(); 
				left = true; right = false;
				break;
			case 38: 
				event.preventDefault();
				up = true; down = false;
				break;
			case 39:
				event.preventDefault();
				right = true; left = false;
				break;
			case 40:
				event.preventDefault();
				down = true; up = false;
				break;
		}
	});

	document.addEventListener('keyup', function(event) {
		switch(event.keyCode) {
			case 90: event.preventDefault(); z = false; break;
			case 37: event.preventDefault(); left = false; break;
			case 38: event.preventDefault(); up = false; break;
			case 39: event.preventDefault(); right = false; break;
			case 40: event.preventDefault(); down = false; break;
		}
	});
}
