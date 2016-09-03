window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var precio = parseFloat(document.getElementById("precio").value);
		var cantidad = parseFloat(document.getElementById("cantidad").value);
		var descuento = parseFloat(document.getElementById("descuento").value);

		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>El Precio Total es " + total(precio,cantidad,descuento) + "</p>";
	});

	function total(precio, cantidad, descuento) {
		total = (precio * cantidad)*( 1 - descuento)
		var n = total.toFixed(2)
		return n	
	}
});

// precio * cantidad ( 1 - decuento)