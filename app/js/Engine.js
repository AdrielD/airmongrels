function Engine() {
	
}
// window.onload = function() {
// 	new Engine().start();
// }

// function Engine() {
	
// 	var SCREEN_WIDTH = 800;
// 	var SCREEN_HEIGHT = 640;
// 	var SCREEN_UPPER_EDGE = 0;
// 	var SCREEN_BOTTOM_EDGE = SCREEN_UPPER_EDGE + SCREEN_HEIGHT;
// 	var SCREEN_LEFT_EDGE = 0;
// 	var SCREEN_RIGHT_EDGE = SCREEN_LEFT_EDGE + SCREEN_WIDTH;

// 	var gameLayer = new Layer("game-layer", SCREEN_WIDTH, SCREEN_HEIGHT);
// 	var gameControls = new Controls();

// 	var gameState = {
// 		STARTED: 0,
// 		PLAYING: 1,
// 		current: null,
// 	}

// 	function Ship() {
// 		this.image = document.createElement("img");
// 		this.image.setAttribute("src", "images/ship1.png");

// 		this.x = 0;
// 		this.y = 0;
// 		this.width = 50;
// 		this.height = 50;
// 	}

// 	var player = new Ship();
// 	player.x = SCREEN_WIDTH/2 - 25;
// 	player.y = SCREEN_BOTTOM_EDGE - 50;
// 	gameLayer.addDrawable(player);

// 	function loop(timestamp) {
// 		requestAnimationFrame(loop);
// 		update(timestamp);
// 		render(timestamp);
// 	}

// 	function update(frameTime) {
// 		if(gameControls.leftKey()) player.x -= 5;
// 		if(gameControls.rightKey()) player.x += 5;
// 		if(gameControls.upKey()) player.y -= 5;
// 		if(gameControls.downKey()) player.y += 5;
// 	}

// 	function render(frameTime) {
// 		gameLayer.clearLayer();
// 		gameLayer.draw();
// 	}

// 	this.start = function() {
// 		console.log("started!");
// 		gameState.current = gameState.STARTED;	
// 		requestAnimationFrame(loop);
// 	};
// }
