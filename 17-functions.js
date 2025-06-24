/*    FUNCIONES EN JAVASCRIPT    */
// Son bloques de codigos reutilizables.

/*    DECLARAR UNA FUNCIONES    */
/* 1. FUNCIÓN PROPIA: SI se pueden ejecutar antes de ser definidas. */
/* 1.1. Cuando no devuelve un valor. */
function saludo() {
    document.write("Hola<br>");
};
saludo();  // Llamar/Invocar Una funcion

/* 1.2. Cuando si devuelve un valor. */
function suma(a, b) {
    return a+b;
};
document.write(suma(5, -2)+"<br>");

/* 1.3. LLamarla antes de definirla. */
document.write(resta(2, 3)+"<br>");
function resta(a, b) {
    return a-b;
};
document.write("<br>");


/* 2. FUNCIÓN EXPRESADA: NO se pueden ejecutar antes de ser definidas. */
/* 2.1. Cuando no devuelve un valor. */
let saludo2= function () {
    document.write("¿Cómo estás?<br>");
};
saludo2();

/* 2.2. Cuando si devuelve un valor. */
let producto= function (a, b) {
    return a*b;
};
document.write(producto(3, 4)+"<br>");
document.write("<br>");


/* 3. FUNCIÓN DE TIPO FLECHA. */
/* 3.1. Una sola línea. */
const division= (a, b) => a/b;
document.write(division(5, 3)+"<br>");

/* 3.2. Más de una línea. */
const potencia= (a, b) => {
    let resutado= a**b;
    return resutado;
};
document.write(potencia(5, 3)+"<br>");
document.write("<br>");


/*    PARAMETROS    */
/* 1. Valor de parámetro por defecto */
function cubo(num= 1) {
    return Math.pow(num, 3);
};
document.write(cubo()+"<br>");
document.write("<br>");

/* 2. Agrupación de parametros, utilizando rest operator */
function sumaPro(...numeros) {
    return numeros.reduce((a, b) => a+b, 0);
};
document.write(sumaPro(1, 2, 3, 4, 5, 6)+"<br>");
document.write("<br>");

/* 3. arguments (no disponible para arrow functions)*/
function otraSuma() {
    let total= 0;
    for (let i in arguments) {    
        total+= arguments[i]
    };
    return total;
};
document.write(otraSuma(12, 21)+"<br>");
document.write("<br>");


/*    FUNCIONES ANIDADAS    */
/* 1. Con Funciones Propias */
function nivel1(a) {
    return function nivel2(b) {
        return function nivel3(c) {
            return a + b + c;
        };
    };
};
document.write(nivel1(1)(2)(3)+"<br>");

/* 2. Con Funciones Expresadas */
const anidado = function(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
};
document.write(anidado(4)(5)(6)+"<br>");

/* 2. Con Funciones De Tipo Flecha */
const flechaAnidada = a => b => c => a + b + c;
document.write(flechaAnidada(7)(8)(9)+"<br>");
document.write("<br>");

