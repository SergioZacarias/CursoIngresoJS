function mostrar()
{
	let vEdad = parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil = document.getElementById("estadoCivil").value; 

	if (vEdad > 18 && estadoCivil == "Soltero") 
	{
		alert ("Es soltero y no es menor");
	}


}