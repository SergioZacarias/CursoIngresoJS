/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
    var precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    var precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    var precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    alert(`La suma es ${precioUno + precioDos + precioTres}`);
	
}
function Promedio () 
{   
    var precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    var precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    var precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    var promedio = (precioUno + precioDos + precioTres) / 3;

    alert (`El promedio es ${promedio}`);
	
}
function PrecioFinal () 
{ 
    var precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    var precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    var precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    var precioTotal = precioUno + precioDos + precioTres;
    var aumento = precioTotal *21/100;
    var precioFinal = precioTotal + aumento;
    

    alert(`El precio final es  ${precioFinal}`);

	
}