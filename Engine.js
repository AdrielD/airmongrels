window.onload = function() {
	new Engine().start();
}

function Engine() {
	
	var SCREEN_WIDTH = 800;
	var SCREEN_HEIGHT = 640;
	var SCREEN_UPPER_EDGE = 0;
	var SCREEN_BOTTOM_EDGE = SCREEN_UPPER_EDGE + SCREEN_HEIGHT;
	var SCREEN_LEFT_EDGE = 0;
	var SCREEN_RIGHT_EDGE = SCREEN_LEFT_EDGE + SCREEN_WIDTH;

	var gameLayer = new Layer("game-layer", SCREEN_WIDTH, SCREEN_HEIGHT);
	var gameControls = new Controls();

	var gameState = {
		STARTED: 0,
		PLAYING: 1,
		current: null,
	}

	function loop(timestamp) {
		update(timestamp);
		render(timestamp);
		requestAnimationFrame(loop);
	}

	function render(frameTime) {
		// console.log("rendering! ");
	}

	function update(frameTime) {
		// console.log("updating! ");
	}

	this.start = function() {
		console.log("started!");
		gameLayer.clearLayer();
		gameState.current = gameState.STARTED;
		requestAnimationFrame(loop);
	};
}
