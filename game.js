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
	var score = 0;
	var scoreElement = document.getElementById("score");
	scoreElement.innerHTML = "Score: " + score;

	var player = new Ship;
	player.setPosition(400,580);

	var keys = { left: 0, up: 0, down: 0, right: 0, };
	var bullets = [];
	var enemies = [];
	var firing = false;
	var spawnRate = 40;
	var spawnCooldown = 0;

	document.addEventListener('keydown', function(event) {
		switch(event.keyCode) {
			case 90:
				event.preventDefault();
				firing = true;
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
			case 90: event.preventDefault(); firing = false; break;
			case 37: event.preventDefault(); keys.left = 0; break;
			case 38: event.preventDefault(); keys.up = 0; break;
			case 39: event.preventDefault(); keys.right = 0; break;
			case 40: event.preventDefault(); keys.down = 0; break;
		}
	});

	setInterval(function() {
		for(var b = 0; b < bullets.length; b++) {
			var bullet = bullets[b];
			var bPos = bullet.getPosition();
			var bLeft = bPos.x;
			var bRight = bPos.x+50;
			var bUp = bPos.y;
			var bDown = bPos.y+50;
			
			for(var e = 0; e < enemies.length; e++) {
				var enemy = enemies[e];
				var ePos = enemy.getPosition();
				var eLeft = ePos.x;
				var eRight = ePos.x+50;
				var eUp = ePos.y;
				var eDown = ePos.y+50;

				if((bLeft >= eLeft && bLeft <= eRight && bUp <= eDown) || (bRight <= eLeft && bRight >= eRight && bUp <= eDown)) {
					console.log("COLLISION!");
					bullets[b].destroy();
					enemies[e].destroy();
					score++;
					scoreElement.innerHTML = "Score: " + score;
					break;
				}
			}
		}

		for(var i = bullets.length - 1; i >= 0; i--) {
			if(bullets[i].isDestroyed()) {
				bullets.splice(i, 1);
			} else {
				if (bullets[i].getPosition().y < SCREEN_UPPER_EDGE) {
					bullets[i].destroy();
				} else {
					bullets[i].moveUp();
				}
			}
		}

		var playerPos = player.getPosition();
		player.countCooldown();

		if (firing && !player.isInCooldown()) {
			bullets.push(new Bullet(playerPos.x+10, playerPos.y));
		}
		
		if (keys.left == 1) player.moveLeft();
		if (keys.right == 1) player.moveRight();
		if (keys.up == 1) player.moveUp();
		if (keys.down == 1) player.moveDown();

		playerPos = player.getPosition();

		if (playerPos.x <= SCREEN_LEFT_EDGE) playerPos.x = SCREEN_LEFT_EDGE+1;
		if (playerPos.x >= SCREEN_RIGHT_EDGE-50) playerPos.x = SCREEN_RIGHT_EDGE-51;
		if (playerPos.y <= SCREEN_UPPER_EDGE) playerPos.y = SCREEN_UPPER_EDGE+1;
		if (playerPos.y >= SCREEN_BOTTOM_EDGE-50) playerPos.y = SCREEN_BOTTOM_EDGE-51;

		player.setPosition(playerPos.x, playerPos.y);

		var randPosX = Math.random() * 650 + 50;

		spawnCooldown++;
		if (spawnCooldown >= spawnRate) {
			spawnCooldown = 0;
			enemies.push(new Enemy(randPosX, -60));
			spawnRate = Math.random() * 100 + 50;
		}

		for(var i = enemies.length - 1; i >= 0; i--) {
			if(enemies[i].isDestroyed()) {
				enemies.splice(i, 1);
			} else {
				if (enemies[i].getPosition().y > SCREEN_BOTTOM_EDGE) {
					enemies[i].destroy();
				} else {
					enemies[i].moveDown();
				}
			}
		}

	}, 1000/60);
}
