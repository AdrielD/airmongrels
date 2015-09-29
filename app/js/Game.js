window.addEventListener('DOMContentLoaded', function() {
	console.log("start!");

	var SCREEN_WIDTH = 800;
	var SCREEN_HEIGHT = 640;

	var gameLayer = new Layer("gameLayer", "container", SCREEN_WIDTH, SCREEN_HEIGHT);
	gameLayer.clear();

	var ship = new spawnPlayer();
	ship.setPosition(300, 100);

	setTimeout(function() {
		gameLayer.draw([ship]);
	}, 100);
});
