/*    TIPOS DE DATOS PRIMITIVOS    */

/*  TYPEOF()
  Sirve para saber el tipo de dato que contiene una variable.
*/

/*  STRINGS  */
let cadena= "Esto es una cadena de texto.";
console.log(typeof(cadena));  // string

/*  NUMBER  */
let numero= 14;
console.log(typeof(numero));  // number

/*  BOOLEAN  */
let booleano= true;
console.log(typeof(booleano));  // boolean

/*  UNDEFINED  */
let indefinido;
console.log(typeof(indefinido));  // undefined

/*  NULL  */
let nulo= null;
console.log(typeof(nulo));  // object (esto es un error q ha existido desde hace mucho tiempo)

/*  SYMBOL  */
let clave= Symbol(1234);
console.log(typeof(clave));  // symbol

/* BIGINT */
let granNumero= 500n;
console.log(granNumero, typeof(granNumero));  // bigint