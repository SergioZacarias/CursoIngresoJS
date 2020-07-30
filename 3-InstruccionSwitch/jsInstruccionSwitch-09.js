function mostrar() {
	let estadiaBase = 15000;
	let estacionDelAño;
	let destino;
	let aumento = 0;
	let descuento = 0;

	estacionDelAño = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;


	switch (estacionDelAño) {

		case "Invierno":

			if (destino == "Bariloche") {

				aumento = 20;
				/*	aumento = estadiaBase + estadiaBase * aumento / 100;
					alert(`Usted debe pagar $ ${aumento}.`); */
			}
			else if (destino == "Mar del plata") {
				descuento = 20;
				/*	descuento = estadiaBase - estadiaBase * descuento / 100;
					alert(`Usted debe pagar $ ${descuento}.`); */


			}
			else {
				descuento = 10
				/*	descuento = estadiaBase - estadiaBase * descuento / 100;
					alert(`Usted debe pagar $ ${descuento}.`);*/

			}

			break;


		case "Verano":

			if (destino == "Bariloche") {
				descuento = 20;
				/*	descuento = estadiaBase - estadiaBase * descuento / 100;
					alert(`Usted debe pagar $ ${descuento}.`);*/

			}
			else if (destino == "Mar del plata") {
				aumento = 20;
				/*	aumento = estadiaBase + estadiaBase * aumento / 100;
					alert(`Usted debe pagar $ ${aumento}.`);*/
			}
			else {
				aumento = 10;
				/*	aumento = estadiaBase + estadiaBase * aumento / 100;
					alert(`Usted debe pagar $ ${aumento}.`);*/
			}

			break;


		case "Otoño":
		case "Primavera":

			if (destino == "Cordoba") {
				alert(`Usted debe pagar $${estadiaBase}`);
				/*	alert(`Usted debe pagar $ ${estadiaBase}.`);*/
			}
			else {
				aumento = 10;
				/*	aumento = estadiaBase + estadiaBase * aumento / 100;
					alert(`Usted debe pagar $ ${aumento}.`) */
			}
			break;

		default:
			alert("No indico una estacion del año o destino correcto.");
			break;
	}
	if (aumento != 0) {
		aumento = estadiaBase + estadiaBase * aumento / 100;
		alert(`Usted debe pagar $${aumento}.`);

	}
	else if (descuento != 0) {
		descuento = estadiaBase - estadiaBase * descuento / 100;
		alert(`Usted debe pagar $${descuento}.`);
	}

}

/* Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,

 se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas
 y Cordoba tiene un descuento del 10%
  Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20%
catarata y Cordoba tiene un aumento del 10%
  Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10%
 cataratas tiene un aumento del 10%
  Mar del plata tiene un aumento del 10%
   y Cordoba tiene el precio sin descuento*/