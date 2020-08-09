/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{ 
	let numeroingresado = 0;
    let sumapositivos = 0;
    let sumanegativos = 0;
    let cantidadpositivos = 0;
	let cantidadnegativos = 0;
	let acumuladorceros = 0; 
    let respuesta = "si";
    let promediopositivos = 0;
    let promedionegativos = 0;
	let diferencia = 0;

	while(respuesta=="si")
	{
		numeroingresado = parseInt(prompt("Ingrese un numero"));

		if(numeroingresado<0)
		{
			sumanegativos = sumanegativos + numeroingresado;
			cantidadnegativos
	++;
		}
		else if(numeroingresado>0)
		{
			sumapositivos= sumapositivos + numeroingresado;
			cantidadpositivos++;
		}
	
		respuesta=prompt("desea continuar?");
	}

	if(cantidadpositivos == 0)
	{
		promediopositivos = "No se puede dividir por 0";
	}
	else
	{
		promediopositivos = sumapositivos / cantidadpositivos;
	}
	
	if(cantidadnegativos == 0)
	{
		promedionegativos = "No se puede dividir por 0";
	}
	else
	{
		promedionegativos = sumanegativos / cantidadnegativos;
	}


	promedionegativos = sumanegativos/cantidadnegativos;
	promediopositivos = sumapositivos/cantidadpositivos;


	document.write("La suma de negativos es :"+sumanegativos+"<br>");
	document.write("La suma de positivos es :"+sumapositivos+"<br>");
}