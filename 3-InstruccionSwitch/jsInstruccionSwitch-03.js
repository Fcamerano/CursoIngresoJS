function mostrar()
{
	let mes 
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 días");
			break;
		default:
			alert("Este mes tiene 30 días o más")
			break;
	}
}