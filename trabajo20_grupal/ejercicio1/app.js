window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var soles = parseFloat(document.getElementById("soles").value);
		var cambio = parseFloat(document.getElementById("cambio").value);

		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>El resultado es " + multiplicacion(soles,cambio) + "</p>";
	});

	function multiplicacion(soles, cambio) {
		multiplicacion = soles * cambio;
		var n = multiplicacion.toFixed(2)
		return n	
	}
});