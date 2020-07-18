/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo = parseInt(document.getElementById("txtIdImporte").value);
	var descuento = sueldo  *25/100;
	var resultado = sueldo - descuento;

	document.getElementById("txtIdResultado").value = resultado;
}
