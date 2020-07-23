function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);

	 if(!(edad >=13 && edad <= 17)) 

	 {
		alert("No es adolescente.");
	 }

} 
/* Al ingresar una edad solo debemos informar si la persona NO es adolescente.
  let edad = parseInt(document.getElementById("txtIdEdad").value);

	  if (edad < 13 || edad > 17)

	  {
		alert("No es adolescente.");
	  }
*/ 