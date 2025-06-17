/*  ESTRUCTURAS RESPETITIVAS (BUCLES)  */

/* WHILE */
/* Normalmente se utiliza cuando no se sabe la cantidad de veces que se va a repetir el bucle, pero si se sabe que se tiene q cumplir la condicion: */

let cont= 0;
while (cont < 3) {
    document.write(`Vale: ${cont}<br>`);
    cont++;
};
document.write(`<br>`);

/* DO - WHILE */
/* Es parecido a WHILE, pero se caracteriza por permitir q almenos una vez se ejecute el código que contiene el bucle  */

do {
    document.write(`Vale: ${cont}<br>`);
    cont++;
} while (cont < 6);
document.write(`<br>`);

/* FOR */
/* Recorrer objetos (cadenas / arreglos / jsons), devolviendo el valor de cada indice */
for (let i= 6; i < 9; i++) {
    document.write(`Vale: ${i}<br>`);
};
document.write(`<br>`);

/* FOR - IN (DA EL INDICE) */
/* Recorrer objetos (cadenas / arreglos / json), devolviendo el indice de cada elemento */
let palabra= "Hola";
for (let letra in palabra) {
    document.write(palabra[letra]+"<br>");
};
document.write(`<br>`);


let list= ["a", "b", "c", "d"];
for (let a in list) {
    document.write(list[a]+`<br>`);
};
document.write(`<br>`);


let json= {
    user1: {
        nombre: "Pepe",
        edad: 12
    },
    user2: {
        nombre: "Juan",
        edad: 11
    }
};
for (let b in json) {
    document.write("Nombre: "+json[b].nombre+" - Edad: "+json[b].edad+"<br>");
};
document.write(`<br>`);


/* FOR - OF (DA EL VALOR) */
/* Recorrer objetos (cadenas / arreglos / jsons), devolviendo el valor de cada elemento */
for (let caracter of palabra) {
    document.write(caracter+"<br>");
};
document.write(`<br>`);


for (let elemto of list) {
    document.write(elemto+"<br>");
};
document.write(`<br>`);

/* Para Utilizar FOR-Of en un json hay q convertirlo en un arreglo */
for (let usuario of Object.values(json)) {
    document.write(usuario.nombre+"<br>");
}
document.write(`<br>`);

/* BREAK */
/* Finaliza la ejecucion del bucle cuando se cumple la condición en donde se encuentra. */
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i+"<br>");
}

/* CONTINUE*/
/* Salta al siguiente ciclo cuando la condicion se cumple */
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i+"<br>");
}