function Entity(specs) {
	this.width = specs.width;
	this.height = specs.height;
	this.x = specs.x;
	this.y = specs.y;
	this.speed = specs.speed;
	
	this.image = document.createElement("img");
	this.image.src = specs.path;
}

Entity.prototype.setPosition = function(x, y) {
	this.x = x;
	this.y = y;
}

function spawnPlayer() {
	var entity = new Entity({
		width: 50,
		height: 50,
		x: 0,
		y: 0,
		speed: 4,
		path: "images/ship1.png",
	});
	return entity;
}
