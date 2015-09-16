function Entity(id) {
	var
		name,
		element,
		posx,
		posy,
		width,
		height,
		visible,
		speed;

	name = id || "object_" + (new Date().getTime());
	// element = document.createElement("div");
	// element.setAttribute("id", name);
	// element.style.position = "absolute";
	// document.body.appendChild(element);

	this.renderElementPosition = function(){
		element.style.left = posx + "px";
		element.style.top = posy + "px";
	}

	this.setPosition = function(x, y) {
		posx = x;
		posy = y;
	};

	this.getPosition = function() {
		return { x: posx, y: posy, };
	};

	this.moveOnAxisX = function(direction) {
		posx += (speed * direction);
	};

	this.moveOnAxisY = function(direction) {
		posy += (speed * direction);
	};

	this.setSpeed = function(value) {
		speed = value;
	};

	this.getSpeed = function() {
		return speed;
	};
}
