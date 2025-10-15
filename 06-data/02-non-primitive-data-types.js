/*    TIPOS DE DATOS NO PRIMITIVOS    */

/*  OBJETOS  */
let objeto= {
    nombre: "Guillermo",
    edad: 25
};
console.log(typeof(objeto));  // object

/*  ARREGLO  */
let arreglo= [1, 2, "a", "b"];
console.log(typeof(arreglo));  // object

/*  FUNCIONES  */
function funcion() {
    return "Soy una función";
};
console.log(typeof(funcion));  // function

/*  FECHA  */
let fecha= new Date();
console.log(typeof(fecha));  // object


/*
typeof new Map();  --> object
typeof new Set();  --> object
*/