/*    OBJETO    */
const objeto= {
    primera: "Propiedad-01",
    segunda: "Propiedad-02",
    tercera: 3,
    cuarta: function () {
        document.write("Este objeto tiene 3 propiedades:<br>");
        document.write(`· ${this.primera}<br>`);
        document.write(`· ${this.segunda}<br>`);
        document.write(`· ${this.tercera}<br>`);
    },
};
objeto.cuarta();
document.write("<br>");


/*    FUNCION CONSTRUCTORA: ASÍ SE CREABA UNA CLASES ANTES DE ECMASCRIPT 6 (ES6)    */
function Persona(nombre, edad) {
    // Asi se crean los atributos
    this.nombre= nombre;
    this.edad= edad;

    // Asi se crean los metodos
    this.saludar= function() {
        document.write(`Hola, ${this.nombre}.<br>`);
    };
};

// Persona.saludar(saludar); -->  No sirve

const persona1= new Persona("Guillermo", 24);
persona1.saludar();
document.write("<br>");


/*    USO DE PROTOTYPE    */
/* Sirve para crear nuevos artibutos / propiedades o metodos a un objeto o clase previamente definida en forma de función. */
Persona.prototype.apellido= "Restrepo";

Persona.prototype.despedida= function() {
    document.write(`Adiós, Sr.${this.apellido}.<br>`);
};
persona1.despedida();
document.write("<br>");

/*    CLASE    */
/* SIN método constructor: */
class Accion {
    decirHola() {
        document.write("Hola<br>");
    };

    decirAdios() {
        document.write("Adiós<br>");
    };
};

let action= new Accion();
action.decirHola();
action.decirAdios();
document.write("<br>");

/* CON método constructor: */
class Asignatura {
    constructor(nombre, duración, cupos) {
        this.nombre= nombre;
        this.duración= duración;
        this.cupos= cupos;
    };

    nombreAsignatura() {
        document.write(`Asignatura: ${this.nombre}<br>`);
    };
};

let materia= new Asignatura("Matemáticas", "10h", 30);

materia.nombreAsignatura();
document.write("<br>");


/*    CLASE Date()    */
let fecha= new Date();
document.write(`${fecha}<br>`);
document.write(`${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}<br>`);
document.write(`<br>`);


/*    HERENCIA Y USO DE (extends y super)    */
class Person {
    constructor(nombre, fechaNacimiento) {
        this.nombre= nombre;
        this.fechaNacimiento= new Date(fechaNacimiento);
    };

    edad() {
        const fechaActual= new Date();
        let edad= fechaActual.getFullYear() - this.fechaNacimiento.getFullYear();
        if (fechaActual.getMonth() === this.fechaNacimiento.getMonth()) {
            if (fechaActual.getDate() >= this.fechaNacimiento.getDate()) {
                return edad;
            };
            edad--;
            return edad;
        };
        if (fechaActual.getMonth() > this.fechaNacimiento.getMonth()) {
            return edad;
        };
        edad--;
        return edad;
    };
};

class Empleado extends Person{
    constructor(nombre, fechaNacimiento, pagoHora) {
        super(nombre, fechaNacimiento);
        this.pagoHora= pagoHora;
    };

    sueldo(horasTrabajadas) {
        return horasTrabajadas*this.pagoHora;
    };
};

let nEmp= new Empleado("Guillermo", "2001/06/28", 5);
document.write(`Edad: ${nEmp.edad()}<br>`);
document.write(`Pago semanal: ${nEmp.sueldo(40)}<br>`);
document.write(`<br>`);


/*    ENCAPSULAMIENTO (Atributos privados)    */
/* Utilizando # Después de ES2022 */
class Producto {
    #codigo= "001";     // Se declara y se define
    #precio;        // Se declara
    constructor(nombre, categoria, precio) {
        this.nombre= nombre;
        this.categoria= categoria;
        this.#precio= precio;   // Se define
    };

    mostrarPrecio() {
        document.write(`Precio: $${this.#precio}<br>`);
    };

    modificarPrecio(nuevoPrecio) {
        this.#precio= nuevoPrecio;
    };
};

let producto1= new Producto("Leche 1L", "Lacteo", 1.00);

/* Mostrar precio por medio de atributo: */
document.write(`${producto1.precio}<br>`); // Muestra undefine

/* Mostrar precio por medio de metodo */
producto1.mostrarPrecio(); // Muestra el precio

document.write(`${producto1.nombre}<br>`)

/* Modificar el valor por medio de atributo */
producto1.precio= 0.5;  // No cambia el valor
producto1.mostrarPrecio();

/* Modificar el valor por medio de método */
producto1.modificarPrecio(0.5); // Si cambia el valor
producto1.mostrarPrecio();

/* Un Atributo que no sea privado si puede mostrarse y ser modificado por medio del uso del mismo atributo */
producto1.nombre= "Leche 1/2L"; // Si cambia el valor
document.write(`Producto: ${producto1.nombre}<br>`); // Si mouestra el valor
document.write(`<br>`);


/*    GET - SET    */
/* Permite mostrar y modificar los atributos privados con una sintaxis como si no fuera privada */

class Telefono {
    #precio;
    
    constructor(marca, modelo, precio) {
        this.marca= marca;
        this.modelo= modelo;
        this.#precio= precio;
    };

    get precio() { // Para mostrar
        return this.#precio;
    };

    set precio(valor) { // Para modificar
        this.#precio= valor;
    };
};

let Tel1= new Telefono("Samsung", "S24 Ultra", 900);
document.write(`Precio de ${Tel1.marca} - ${Tel1.modelo}: $${Tel1.precio}<br>`);

Tel1.precio= 850;
document.write(`Nuevo precio de ${Tel1.marca} - ${Tel1.modelo}: $${Tel1.precio}<br>`);
document.write(`<br>`);


/* Utilizando _ Antes de ES2022 */
class Mascota {
    constructor(nombre, peso) {
        this.nombre= nombre;
        this._peso= peso;
    };
};

let masc1= new Mascota("Toby", 20);
document.write(`El peso de ${masc1.nombre} es de: ${masc1._peso}kg.<br>`); // Muestra el atributo

masc1._peso= 25; // Modifica el valor del atributo
document.write(`El nuevo peso de ${masc1.nombre} es de: ${masc1._peso}kg.<br>`);
document.write(`<br>`);

/* NO FUNCIONA, ES MAS COMO REERENCIA PARA OTROS DESARROLLADORES, ES PREFERIBLE UTILIZAR (#) O (GET Y SET) */


/*    CLOSURE    */
/* Solo funciona en clases que fueron definidas como funciones constructoras */
function Casa(ubi, nombre, tamaño) {
    let ubicacion= ubi; // Declarar atributo privado
    this.nombre= nombre;
    this.tamaño= tamaño;

    this.verUbicacion= function () {
        return ubicacion;
    };

    this.modificarUbicacion= function (nuevaUbicacion) {
        ubicacion= nuevaUbicacion;
    };
};

let casa1= new Casa("Ecuador - Guayas - Guayaquil", "Casa Pobre", 120);

document.write(`${casa1.ubicacion}<br>`); // Undefine
document.write(`${casa1.verUbicacion()}<br>`); // Muestra ubicación.

casa1.ubicacion= "Durán"; // NO modifica
document.write(`${casa1.verUbicacion()}<br>`);

casa1.modificarUbicacion("Durán"); // SI modifica
document.write(`${casa1.verUbicacion()}<br>`);
document.write(`<br>`);


/*    POLIMORFISMO    */
/* Permite utilizar el mismo metodo con diferentes valores y resultados, dependiendo de lo que se necesite */
class Figura {
    perimetro() {
        return 0;
    };
};

class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado= lado;
    };

    perimetro() {
        return this.lado ** 2;
    };
};
const HOLA= "xd";
class Triangulo extends Figura {
    constructor(lado) {
        super();
        this.lado= lado;
    };

    perimetro() {
        return this.lado * 3;
    }
};

let figuras= [new Cuadrado(3), new Triangulo(6)];
for (let figura of figuras) {
    document.write(`Perimetro: ${figura.perimetro()}<br>`);
};

/*    DUCK TYPING POLIMORFISMOS E METODOS FUERAS DE CLASES    */
const albañil= {
    diseñar() {
        document.write(`Diseño hecho por un ALBAÑIL.<br>`);
    }
};

const arquitecto= {
    diseñar() {
        document.write(`Diseño hecho por un ARQUITECTO.<br>`);
    }
};

function CrearDiseño(encargado) {
    encargado.diseñar(); // Mismo metodo diferentes objetos
};

CrearDiseño(albañil);
CrearDiseño(arquitecto);
document.write(`<br>`);


/*    ABSTRACCION    */
/* 1. Asbtraer únicamente lo necesario de un objeto, ejemplo: */
class Fruta {
    constructor(nombre, peso, precio, medidas, fechaSiembra, fechaCosecha){
        /* Información necesaria */
        this.nombre= nombre;
        this.peso= peso;
        this.precio= precio;

        /* Información No Necesaria */
        this.medidas= medidas;
        this.fechaSiembra= fechaSiembra;
        this.fechaCosecha= fechaCosecha;
    };
};

/* 2. Ocultar el proceso de los metodos porq no es necesario que el usuario sepa el proceso detras de cada uno. */
class Lavadora {
    /* Método público para realizar un lavado rápido */
    lavadoRapido() {
        this.#llenarAgua();
        this.#agitar();
        this.#vaciarAgua();
        this.#centrifugar();
        document.write(`Lavado rápido completado.`);
    };

    /* Métodos privados para realizar un lavado rápido */
    #llenarAgua() {
        document.write(`Se llena de agua a un nivel optimo<br>`);
    };

    #agitar() {
        document.write(`Se gira en sentido horario 2 segundos y en sentido antiorario 2 segundos por 15 miutos.<br>`);
    };

    #vaciarAgua() {
        document.write(`Se drena el agua de lavado`);
    };

    #centrifugar() {
        document.write('se gira en sentido horario a maxima velocidad por 10 minutos<br>');
    };
};

/* 3. Clase abstracta */
/* Son clases que no se instancian, se utilizan como plantillas para otras clases, tambien puede contener metodos vacios. */
class calculadora {
    constructor(...numeros) {
        this.numeros= numeros;
    };

    division() {
        if (this.numeros[1] === 0) {
            /* esto avienta un error y retiene la ejecucon en caso de que no se cumpla la condicion */
            throw new Error(`No se puede dividir para 0 (cero)`);
        };
        let resultado= this.numeros[0]/this.numeros[1];
        return resultado;
    };
};

let calc= new calculadora(2, 1); // Revisar consola
document.write(calc.division());
document.write(`<br>`);

/* Un ejemplo de clase abstracta seria persona cliente y empleado donde persona es la plantilla cliente y empleado heredan de persona mas nunca se instancia la clase persona */

/*    COMPOSICION    */
/* Se trata de crear un nuevo objeto en base a diferentes objetos, se parece a la herencia pero no es lo mismo. */
const moverse= {
    moverse() {
        document.write(`moverse<br>`);
    }
};

const volar= {
    volar() {
        document.write(`volar<br>`);
    }
};

const disparar= {
    disparar() {
        document.write(`disparar<br>`);
    }
};

function Personaje() {
    return Object.assign({}, moverse, disparar);
};

let personaje1= new Personaje();

personaje1.moverse();
document.write(`<br>`);

/*    METODOS ESTATICOS    */
class Saludar {
    static decirHola() {
        document.write(`Hola<br>`);
    };
};

/* Así se llama un metodo estatico */
Saludar.decirHola();

/* Así NO se llama un metodo estatico */
// let saludo= new Saludar();
// saludo.decirHola();
document.write(`<br>`);

/*    INSTANCEOF    */
/* Sirve para saber si una intancia pertenece a una clase especifica */
// devuelve true si pertenece
document.write(`${calc instanceof calculadora}<br>`);

// devuelve false si no pertenece
document.write(`${calc instanceof Persona}<br>`);

/* IMPORT EXPORT */
/* Para utilizar una clase en otro archivo */
/* A la clase se le pone (export) */
/* En el archivo se pone (import { nombreClase } from "rutaArchivo") */