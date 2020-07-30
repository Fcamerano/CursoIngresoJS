function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Ushuaia":
			alert("Sur");
	}
/*
let destino = document.getElementById("txtIdDestino").value;

if(destino == "Bariloche")
{
	alert("Oeste");
}
else if(destino == "Cataratas")
{
	alert("Norte");
}
else if(destino == "Mar del plata")
{
	alert("Este");
}
else //if(destino == "Ushuaia")
{
	alert("Sur");
}*/
}