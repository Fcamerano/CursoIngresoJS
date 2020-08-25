/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar() {
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let respuesta;
	let mayorTemperatura = 0;
	let nombreMayorTemperatura;
	let mayoresDeEdadViudos = 0;
	let hombresNoCasados = 0;
	let abuelosCalientes = 0;
	let contadorHombresSolteros = 0;
	let acumuladorHombresSolteros = 0;
	let promedioHombresSolteros = 0;

	do {

		nombre = prompt("Ingrese nombre: ");

		do {
			edad = parseInt(prompt("Ingrese la edad: "));
		} while (isNaN(edad));

		do {
			temperatura = parseInt(prompt("Ingrese su temperatura"));
		} while (isNaN(temperatura));

		do {
			estadoCivil = prompt("Ingrese su estado civil: soltero/casado/viudo");
		} while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		do {
			sexo = prompt("Ingrese su sexo: f/m");
		} while (sexo != "f" && sexo != "m");

		respuesta = prompt("Ingrese si/no");

		if (mayorTemperatura < temperatura) //El nombre de la persona con mas temperatura.
		{
			mayorTemperatura = temperatura;
			nombreMayorTemperatura = nombre;
		}

		if (edad >= 18 && estadoCivil == "viudo") //Cuantos mayores de edad estan viudos.
		{
			mayoresDeEdadViudos++;
		}

		if (sexo == "m" && estadoCivil != "casado") //La cantidad de hombres que hay solteros o viudos.
		{
			hombresNoCasados++;
		}

		if (edad > 60 && temperatura > 38) //cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		{
			abuelosCalientes++;
		}

		if (sexo == "m" && estadoCivil == "soltero") //El promedio de edad entre los hombres solteros.
		{
			contadorHombresSolteros++;
			acumuladorHombresSolteros = acumuladorHombresSolteros + edad;
		}

	} while (respuesta == "si");

	promedioHombresSolteros = acumuladorHombresSolteros / contadorHombresSolteros;

	alert("El tipo con mas temperatura es: " + nombreMayorTemperatura);
	alert("La cantidad de mayores de edad viudos es de: " + mayoresDeEdadViudos);
	alert("La cantidad de hombres solteros o viudos es: " + hombresNoCasados);
	alert("La cantidad de abuelos calientes es: " + abuelosCalientes);
	alert("El promedio de edad de hombres solteros es: " + promedioHombresSolteros);
}
