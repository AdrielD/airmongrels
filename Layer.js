function Layer(id, width, height) {
	
	var layerDOM = document.getElementById(id);
	var context = layerDOM.getContext("2d");
	var defaultColor = "#000000";

	layerDOM.width = width;
	layerDOM.height = height;

	var drawables = [];

	this.addDrawable = function(entity) {
		drawables.push(entity);
	};

	this.draw = function() {
		for(var i in drawables) {
			var obj = drawables[i]
			context.drawImage(obj.image, obj.x, obj.y, obj.width, obj.height);
		}
	};

	this.clearLayer = function() {	
		context.fillColor = defaultColor;
		context.fillRect(0, 0, layerDOM.width, layerDOM.height);
	};
}
