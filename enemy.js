;(function(context) {
	function Enemy(x, y) {
		var element = document.createElement('div');
		element.setAttribute("id", "enemy");
		var posx = 0;
		var posy = 0;
		var speed = 2;
		var destroyed = false;

		this.setPosition = function(x, y) {
			posx = x;
			posy = y;
			element.style.top = y + "px";
			element.style.left = x + "px";
		};

		this.getPosition = function() {
			return { x: posx, y: posy, };
		};

		this.moveDown = function() {
			posy += speed;
			this.setPosition(posx, posy);
		};

		this.destroy = function() {
			destroyed = true;
			document.getElementById("screen").removeChild(element);
		};

		this.isDestroyed = function() { return destroyed; }

		this.setPosition(x, y);
		document.getElementById("screen").appendChild(element);
	}

	context.Enemy = Enemy;
})(window);
