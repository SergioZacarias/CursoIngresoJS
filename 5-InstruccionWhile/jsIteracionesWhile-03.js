/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	let claveIngresada;
	let oportunidades = 0;
	claveIngresada = prompt("ingrese clave.");


	while (claveIngresada != "utn750" && oportunidades < 2) {

		alert("La clave es incorrecta. Intente nuevamente");
		claveIngresada = prompt("ingrese clave.");
		oportunidades++;

		if (claveIngresada == "utn750") {

			alert("Clave correcta. Bienvenido");
		}

       

	}



}
