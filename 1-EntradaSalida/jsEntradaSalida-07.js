/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var Nuno = parseInt(document.getElementById("txtIdNumeroUno").value);
	var Ndos =parseInt(document.getElementById("txtIdNumeroDos").value);

	alert("La suma es " + (Nuno+Ndos));	
}

function restar()
{
	var Nuno = parseInt(document.getElementById("txtIdNumeroUno").value);
	var Ndos =parseInt(document.getElementById("txtIdNumeroDos").value);

	alert("La resta es " + (Nuno-Ndos));	
	
}

function multiplicar()
{ 
	var Nuno = parseInt(document.getElementById("txtIdNumeroUno").value);
    var Ndos =parseInt(document.getElementById("txtIdNumeroDos").value);

    alert("La multiplicacion es " + (Nuno*Ndos));	
	
}

function dividir()
{
	var Nuno = parseFloat(document.getElementById("txtIdNumeroUno").value);
	var Ndos =parseFloat(document.getElementById("txtIdNumeroDos").value);

	alert("La division es " + (Nuno/Ndos).toFixed(2));	

	
}

