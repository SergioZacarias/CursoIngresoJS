function mostrar() {
	let vEdad = parseInt(document.getElementById("txtIdEdad").value);

	if (vEdad < 13) {
		alert("es menor");
	}

	else if (vEdad < 18) {
		alert("es adolescente");
	}

	else {
		alert("es mmayor");
	}

}
/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */