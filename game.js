window.onload = function() {
	StartGame();
}

function StartGame() {
	var SCREEN_WIDTH = 800;
	var SCREEN_HEIGHT = 640;
	var SCREEN_UPPER_EDGE = 0;
	var SCREEN_BOTTOM_EDGE = SCREEN_UPPER_EDGE + SCREEN_HEIGHT;
	var SCREEN_LEFT_EDGE = 0;
	var SCREEN_RIGHT_EDGE = SCREEN_LEFT_EDGE + SCREEN_WIDTH;

	var screen = document.getElementById("screen");

	var player = new Ship;
	player.setPosition(400,580);

	var keys = { left: 0, up: 0, down: 0, right: 0, };
	var bullets = [];

	document.addEventListener('keydown', function(event) {
		switch(event.keyCode) {
			case 32:
				event.preventDefault();
				var pos = player.getPosition();
				bullets.push(new Bullet(pos.x, pos.y));
				break;
			case 37: 
				event.preventDefault(); 
				keys.left = 1;
				if (keys.right == 1) keys.right = 0;
				break;
			case 38: 
				event.preventDefault();
				keys.up = 1;
				if (keys.down == 1) keys.down = 0;
				break;
			case 39:
				event.preventDefault();
				keys.right = 1;
				if (keys.left == 1) keys.left = 0;
				break;
			case 40:
				event.preventDefault();
				keys.down = 1;
				if (keys.up == 1) keys.up = 0;
				break;
		}
		// console.log(event.keyCode);
	});

	document.addEventListener('keyup', function(event) {
		switch(event.keyCode) {
			case 37: event.preventDefault(); keys.left = 0; break;
			case 38: event.preventDefault(); keys.up = 0; break;
			case 39: event.preventDefault(); keys.right = 0; break;
			case 40: event.preventDefault(); keys.down = 0; break;
		}
	});

	setInterval(function() {
		for(var i = bullets.length - 1; i >= 0; i--) {
			if(bullets[i].isDestroyed()) {
				bullets.splice(i, 1);
			} else {
				var pos = bullets[i].getPosition();
				if (pos.y < SCREEN_UPPER_EDGE) {
					bullets[i].destroy();
				} else {
					bullets[i].moveUp();
				}
			}
		}

		if (keys.left == 1) player.moveLeft();
		if (keys.right == 1) player.moveRight();
		if (keys.up == 1) player.moveUp();
		if (keys.down == 1) player.moveDown();

		var playerPos = player.getPosition();

		if (playerPos.x <= SCREEN_LEFT_EDGE) playerPos.x = SCREEN_LEFT_EDGE+1;
		if (playerPos.x >= SCREEN_RIGHT_EDGE-50) playerPos.x = SCREEN_RIGHT_EDGE-51;
		if (playerPos.y <= SCREEN_UPPER_EDGE) playerPos.y = SCREEN_UPPER_EDGE+1;
		if (playerPos.y >= SCREEN_BOTTOM_EDGE-50) playerPos.y = SCREEN_BOTTOM_EDGE-51;

		player.setPosition(playerPos.x, playerPos.y);

	}, 1000/60);
}
