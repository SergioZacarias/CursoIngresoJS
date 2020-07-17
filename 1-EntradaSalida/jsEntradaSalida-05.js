/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var Vnombre = document.getElementById("txtIdNombre").value;
	var Vedad = document.getElementById("txtIdEdad").value;

	alert(`Usted se llama ${Vnombre} y tiene ${Vedad} años`);
}

