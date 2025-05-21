let valor1, valor2, suma, resta, multiplicacion, division, residuo, potencia;

valor1= parseInt(prompt("Ingresa el 1er valor: "));
valor2= Number(prompt("Ingresa el 2do valor: "));

// operación de suma
suma= valor1+valor2;

// operación de resta
resta= valor1-valor2;

// operación de multiplicacion
multiplicacion= valor1*valor2;

// operación de division
division= valor1/valor2;

// operación de residuo
residuo= valor1%valor2;

// operación de potencia
potencia= valor1**valor2;

document.write(`La suma de ${valor1} más ${valor2} es igual a: ${suma}.<br>`);

document.write(`La resta de ${valor1} menos ${valor2} es igual a: ${resta}.<br>`);

document.write(`La multiplicación de ${valor1} por ${valor2} es igual a: ${multiplicacion}.<br>`);

document.write(`La división de ${valor1} entre ${valor2} es igual a: ${division}.<br>`);

document.write(`El residuo de ${valor1} entre ${valor2} es igual a: ${division}.<br>`);

document.write(`La potencia de ${valor1} elevado a la ${valor2} es igual a: ${division}.<br>`);