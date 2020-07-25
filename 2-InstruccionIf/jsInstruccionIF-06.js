function mostrar()
{
	let vEdad = parseInt(document.getElementById("txtIdEdad").value);  

	if (vEdad <13) 

{
	alert("es menor");
}

else if (vEdad < 18) 

{
	alert("es adolescente");
}

else 

	{
	      alert("es mmayor");
	}	

} 