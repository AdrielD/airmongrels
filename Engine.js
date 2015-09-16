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

	var FPS = 60;
	var last_fps = 0;
	var lastTime = 0;
	var currentTime = lastTime;
	var deltaTime = 0;

	function loop() {
		currentTime = timestamp();
		deltaTime += (currentTime - lastTime) / 1000;

		update();
		render();

		lastTime = currentTime;

		if(deltaTime <= 1) {
			last_fps++;
		}
		else {
			console.log("FPS: " + last_fps);
			last_fps = 0;
			deltaTime = 0;
		}

		requestAnimationFrame(loop);
	}

	function render() {
		// console.log("rendering! ");
	}

	function update(frameTime) {
		// console.log("updating! ");
	}

	function timestamp() {
		return window.performance.now();
	}

	this.start = function() {
		console.log("started!");
		gameLayer.clearLayer();
		requestAnimationFrame(loop);
	};
}
