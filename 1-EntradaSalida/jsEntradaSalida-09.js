/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{    
	var sueldo =parseInt( document.getElementById("txtIdSueldo").value);
	var aumento = sueldo  *10/100;
	var resultado = sueldo + aumento;

	document.getElementById("txtIdResultado").value = resultado;


}
