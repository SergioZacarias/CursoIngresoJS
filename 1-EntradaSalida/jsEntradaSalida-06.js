/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{   
	var Nuno = document.getElementById("txtIdNumeroUno").value;
	var Ndos = document.getElementById("txtIdNumeroDos").value;
	var resultado;

	Nuno = parseInt(Nuno);
	Ndos = parseInt(Ndos);

	resultado = Nuno + Ndos;


	alert(`El resultado es ${resultado}`);
}

