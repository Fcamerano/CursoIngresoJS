function mostrar()
{
	let estacion = txtIdEstacion.value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					alert("No se viaja");
					break;
			}
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
				case "Cordoba":
					alert("No se viaja");
					break;
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja");
					break;
			}
		case "Otoño":
			switch(destino)
			{
				case "Bariloche":
				case "Cordoba":
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja");
					break;
			}
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					alert("No se viaja");
					break;
			}
	}
}