/*
    (SPREAD OPERATOR): Operador de propagación.
    (REST OPERATOR): Operador de descanso.
*/
/* SPREAD OPERATOR (cuando expande) */
// 1. COPIAR ARREGLOS / OBJETOS
let arrOriginal= ["a", "b", "c"];
let arrCopia= [...arrOriginal];
for (let i in arrCopia) {
    document.write(i+": "+arrCopia[i]+"<br>");
};
document.write("<br>");

let objOriginal= {x: "a", y: "b", z: "c"};
let objCopia= {...objOriginal};
for (let i of Object.keys(objCopia)) {
    document.write(i+": "+objCopia[i]+"<br>");
};
document.write("<br>");

// 2. UNIR  ARREGLOS / OBJETOS
let arr1= [1, 2];
let arr2= [3, 4];
let arrUnion= [...arr1, ...arr2];
for (let i in arrUnion) {
    document.write(i+": "+arrUnion[i]+"<br>");
};
document.write("<br>");

let obj1= {w: 1, x: 2};
let obj2= {y: 3, z: 4};
let objUnion= {...obj1, ...obj2};
for (let i of Object.keys(objUnion)) {
    document.write(i+": "+objUnion[i]+"<br>");
};
document.write("<br>");

// 3. CONVERTIR CADENAS EN ARREGLOS
let cadena= "Hola";
let arreglo= [...cadena];
document.write(arreglo+"<br>");
document.write("<br>");

/* REST OPERATOR (cuando agrupa) */
// 1. Unir los parametros de una funcion en una lista.
function sumar(...numeros) {
    return numeros;
};
let x= sumar(1, 2, 3, 4);
document.write(x+"<br>");
document.write("<br>");

// 2. Unir elementos de arreglos u objetos.

let [part1, ...part2]= [1, 2, 3, 4];
document.write(part1+"<br>");
document.write(part2+"<br>");
document.write("<br>");

let obj= {w: "a", x: "b", y: "c", z: "d"};
let {z, ...resto}= {w: "a", x: "b", y: "c", z: "d"};
document.write(z+"<br>");
document.write(Object.values(resto)+"<br>");
document.write("<br>");