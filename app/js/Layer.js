function Layer(id, parentId, width, height) {
	var parent = document.getElementById(parentId);
	var layer = document.createElement("canvas");
	layer.id = id;
	layer.width = width;
	layer.height = height;
	parent.appendChild(layer);

	var context = layer.getContext("2d");
	var sprites = [];

	this.clear = function() {
		context.fillStyle = "#000000";
		context.fillRect(0, 0, layer.width, layer.height);
		return this;
	};

	this.draw = function(entities) {
		for(var i = 0; i < entities.length; i++) {
			var e = entities[i];
			context.drawImage(e.image, e.x, e.y, e.width, e.height);
		}
	};
}
