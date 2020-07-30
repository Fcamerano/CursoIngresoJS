function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("Frío");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Calor");
			break;
		default:
			alert("No se encuentra contemplada");
			break;
	}
}