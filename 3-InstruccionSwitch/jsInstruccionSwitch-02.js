function mostrar() {
	/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

	let mesDelAño;
	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño) {
		case "Junio":
		case "Julio":
		case "Agosto":

			alert("Abrigate que hace frio chango.");
			break;

		case "Abril":
		case "Mayo":
			alert("Falta para el invierno.");
			break;

		default:


			alert("Ya pasamos el frio, ahora calor.");
			break;


	}




}