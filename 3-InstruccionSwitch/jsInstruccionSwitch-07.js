function mostrar() {
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
			alert("Estas en el sur del pais.");
			break;

		case "Cataratas":
			alert("Estas en el oeste del pais.");
			break;

		case "Mar del plata":
			alert("Estas en el este del pais.");
			break;

		case "Chaco":
			alert("Estas en el norte del pais.");
			break;


	}


}
/*Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/