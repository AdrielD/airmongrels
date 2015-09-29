function Controls() {

}

// function Controls() {
// 	var left = false;
// 	var right = false;
// 	var up = false;
// 	var down = false;
// 	var z = false;

// 	var holdLeft = false;
// 	var holdRight = false;
// 	var holdUp = false;
// 	var holdDown = false;

// 	function keyPressedDown(event) {
// 		switch(event.keyCode) {
// 			case 90:
// 				event.preventDefault();
// 				z = true;
// 				break;
// 			case 37: 
// 				event.preventDefault(); 
// 				left = true;
// 				if(right) {
// 					right = false;
// 					holdRight = true;
// 				}
// 				break;
// 			case 38: 
// 				event.preventDefault();
// 				up = true;
// 				if(down) {
// 					down = false;
// 					holdDown = true;
// 				}
// 				break;
// 			case 39:
// 				event.preventDefault();
// 				right = true;
// 				if(left) {
// 					left = false;
// 					holdLeft = true;
// 				}
// 				break;
// 			case 40:
// 				event.preventDefault();
// 				down = true;
// 				if(up) {
// 					up = false;
// 					holdUp = true;
// 				}
// 				break;
// 		}
// 	}

// 	function keyReleased(event) {
// 		switch(event.keyCode) {
// 			case 90: event.preventDefault(); z = false; break;
// 			case 37: event.preventDefault(); left = false; holdLeft = false; if(holdRight) right = true; break;
// 			case 39: event.preventDefault(); right = false; holdRight = false; if(holdLeft) left = true; break;
// 			case 38: event.preventDefault(); up = false; holdUp = false; if(holdDown) down = true; break;
// 			case 40: event.preventDefault(); down = false; holdDown = false; if(holdUp) up = true; break;
// 		}
// 	}

// 	this.leftKey = function() {
// 		return left;
// 	};

// 	this.rightKey = function() {
// 		return right;
// 	};

// 	this.upKey = function() {
// 		return up;
// 	};

// 	this.downKey = function() {
// 		return down;
// 	};

// 	document.addEventListener('keydown', keyPressedDown);
// 	document.addEventListener('keyup', keyReleased);
// }
