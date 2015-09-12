;(function(context) {
	
	function Ship() {
		var element = document.getElementById("ship");
		var posx = 0;
		var posy = 0;
		var speed = 7;

		this.setPosition = function(x, y) {
			posx = x;
			posy = y;
			element.style.top = y + "px";
			element.style.left = x + "px";
		};

		this.getPosition = function() {
			return { x: posx, y: posy, };
		};

		this.moveLeft = function() {
			posx -= speed;
			this.setPosition(posx, posy);
		};

		this.moveRight = function() {
			posx += speed;
			this.setPosition(posx, posy);
		};

		this.moveUp = function() {
			posy -= speed;
			this.setPosition(posx, posy);
		};

		this.moveDown = function() {
			posy += speed;
			this.setPosition(posx, posy);
		};

		this.getSpeed = function() {
			return speed;
		};
	}

	context.Ship = Ship;
})(window);
