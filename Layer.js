function Layer(id, width, height) {
	
	var layerDOM = document.getElementById(id);
	var ctx = layerDOM.getContext("2d");
	var defaultColor = "#000000";

	layerDOM.width = width;
	layerDOM.height = height;

	this.clearLayer = function() {
		ctx.fillColor = defaultColor;
		ctx.fillRect(0, 0, layerDOM.width, layerDOM.height);
	};
}
