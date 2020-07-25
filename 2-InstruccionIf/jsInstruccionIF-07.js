function mostrar() {
	let vEdad = parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil = document.getElementById("estadoCivil").value;

	if (vEdad > 18 && estadoCivil == "Soltero") {
		alert('Es muy pequeño para NO ser soltero.');
	}



}
/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje:
'Es muy pequeño para NO ser soltero.'*/