/*  OPERADORES DE COMPARACIÓN  */
let valor1, valor2, valor3, valor4;
valor1= 5;
valor2= "5";
valor3= 10;
valor4= "10";

document.write(`(<code> > <code>): Es ${valor1} mayor que \"${valor4}\": (${valor1>valor4})<br>`);

document.write(`(<code> < </code>): Es ${valor1} menor que \"${valor4}\": (${valor1<valor4})<br>`);

document.write(`(<code> >= <code>): Es \"${valor2}\" mayor o igual que ${valor3}: (${valor2>=valor3})<br>`);

document.write(`(<code> <= </code>): Es \"${valor2}\" menor o igual que ${valor3}: (${valor2<=valor3})<br>`);

document.write(`(<code> == </code>): Es ${valor1} igual que \"${valor2}\": (${valor1==valor2})<br>`);

document.write(`(<code> === </code>): Es ${valor1} estrictamente igual que \"${valor2}\": (${valor1===valor2})<br>`);

document.write(`(<code> != </code>): Es ${valor3} diferente que \"${valor4}\": (${valor3!=valor4})<br>`);

document.write(`(<code> !== </code>): Es ${valor3} estrictamente diferente que \"${valor4}\": (${valor3!==valor4})<br>`);