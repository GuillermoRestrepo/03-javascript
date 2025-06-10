/*  ESTRUCTURAS CONDICIONALES  */
let numero= 4;

/* if */
if (numero === 4) {
    document.write("Verdadero");
}

/* if - else */
if (numero === 5) {
    document.write("Verdadero");
} else {
    document.write("Falso");
}

/* Condicional Dentro De Otra Condicional (PREFERIBLE NO USAR) */
if (numero === 3) {
    document.write("Verdadero");
} else {
    if (numero === 4 ) {
        document.write("Otro Verdadero");
    } else {
        if (numero === 5) {
            document.write("Ultimo Verdadero");
        }
    }
}

/* if - elif - else */
if (numero === 5) {
    document.write("Verdadero");
} else if (numero === 4) {
    document.write("Opción 1");
} else if (numero === 3) {
    document.write("Opcion 2");
} else {
    document.write("Falso");
}

/* Switch - Case */
switch (numero) {
    case 3:
        document.write("Vale 3");
        break;
    case 3:
        document.write("Vale 4");
        break;
    case 3:
        document.write("Vale 5");
        break;
    default:
        document.write("Un valor distindo");
        break;
}

/* Operadores Ternarios */
/* No es una estructura condicional, pero equivale a un if - else q devuelve u unico valor */

/* (Condicion) ? verdadero : falso */
document.write((numero == 4) ? "SI es cuarto" : "NO es cuatro");

/* Operador Ternario Anidado */
let nota= 7;

let mensaje= (nota >= 7) ? "Aprobado" :
             (nota >= 4) ? "Recuperación" : "Reprobado";