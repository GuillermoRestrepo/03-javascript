/*
prompt(): es una función integrada del navegador que muestra una ventana emergente al usuario con un campo de texto, para que este pueda ingresar datos por teclado.
*/

let nombre, apellido, edad, telefono;
nombre= prompt("Ingresa tu nombre...");
apellido= prompt("Ingresa tu apellido...");
edad= prompt("Ingresa tu edad...");
telefono= prompt("Ingresa tu número de teléfono...");

document.write(`Nombre: ${nombre}<br>`);
document.write(`Apellido: ${apellido}<br>`);
document.write(`Edad: ${edad}<br>`);
document.write(`Teléfono: ${telefono}<br>`);