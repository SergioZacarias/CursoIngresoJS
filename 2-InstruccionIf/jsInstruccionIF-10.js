function mostrar()
{
	let vMaximo = 10;
	let vMinimno = 1;
	let vNum;

	vNum = Math.round( Math.random() * (vMaximo - vMinimno) + vMinimno);

	if (vNum >= 9) 

	{
		alert (vNum + " Excelente.");

	}
	else if (vNum >=4) 

	{
		alert (vNum +  " APROBÓ.");
	} 

	else 
	{
		alert(vNum + " Vamos, la proxima se puede");
	}

}
/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/