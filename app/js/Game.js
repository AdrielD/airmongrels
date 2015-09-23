;(function() {
	console.log("Game initialized");

	var airmongrels = airmongrels || {};
	var dependencies = ["Engine", "Controls", "Layer"];

	function loadDependencies() {
		for(var i = 0; i < dependencies.length; i++) {
			var script = document.createElement("script");
			script.src = "js/" + dependencies[i] + ".js";
			script.async = false;
			document.head.appendChild(script);
		}
	}

	var loadAnimation = loadAnimation || {
		element: null,
		animation: 0,
		start: function() {
			loadAnimation.element = document.getElementById("loading-animation"),
			loadAnimation.element.innerHTML = "Loading";
			loadAnimation.animation = setInterval(function() {
				loadAnimation.element.innerHTML += ".";
			}, 10);
		},
		stop: function() {
			clearInterval(loadAnimation.animation);
			loadAnimation.element.innerHTML += " and loaded!";
		}
	}

	window.addEventListener('load', function() {
		loadAnimation.start();

		setTimeout(function() {
			loadDependencies();
			loadAnimation.stop();
		}, 100);
	});
})();
