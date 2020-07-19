/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{   
	var numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	var numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	var resultado = numeroUno + numeroDos;

	alert("La suma es "+ resultado);

}

/*
  Me ahorro una variable, en este caso "resultado."
  function sumar()
{   
	var Nuno =parseInt(document.getElementById("txtIdNumeroUno").value);
	var Ndos =parseInt (document.getElementById("txtIdNumeroDos").value);


	alert("El resultado es " + (Nuno+Ndos));

}
  */

 