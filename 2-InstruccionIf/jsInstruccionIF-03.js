function mostrar() {
	let vEdad;
	vEdad = document.getElementById("txtIdEdad").value;

	if (vEdad >= 18) {
		alert("Es mayor de edad.");
	}
	else {
		alert("Es menor de edad.");
	}



}
/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/