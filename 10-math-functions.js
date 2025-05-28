document.write(`<h1>FUNCIONES MÁTEMATICAS</h1>`);
document.write(`Ya se que no son funciones, so metodos de la clase Math, pero se supone q no sabía.<br>`)

document.write(`<br>VARIADAS<br>`);
document.write(`<code> Math.abs(-10) --> </code> Valor absoluto de un número: ${Math.abs(-10)}<br>`);

document.write(`<code> Math.max(-10, -15, 10, 15) --> </code> Valor máximo de un conjunto de números: ${Math.max(-10, -15, 10, 15)}<br>`);

document.write(`<code> Math.min(-10, -15, 10, 15) --> </code> Valor mínimo de un conjunto de números: ${Math.min(-10, -15, 10, 15)}<br>`);

document.write(`<code> Math.sign(-10) --> </code> Si es un numero negativo devuelve -1, si es positivo devuelve 1 y si es cero, devuelve 0: (${Math.sign(-3)})<br>`);


document.write(`<br>REDONDEO<br>`);
document.write(`<strong>NOTA: </strong> no existe funcion nativa para redondear con decimales, pero se puede programar ( se verá más adelantes en funciones).`);
document.write(`<code> Math.round(7.631) --> </code> Redondea un numero decimal: ${Math.round(7.631)}<br>`);

document.write(`<code> Math.floor(7.631) --> </code> Redondea al entero inferior: ${Math.floor(7.631)}<br>`);

document.write(`<code> Math.ceil(7.631) --> </code> Redondea al entero superior: ${Math.ceil(7.631)}<br>`);

document.write(`<code> Math.trunc(7.631) --> </code> NO redondea, simplemente quita la parte decimal de un número y deja la parte entera: ${Math.trunc(7.631)}<br>`);


document.write(`<br>POTENCIAS Y RAÍCES<br>`);
document.write(`<code> Math.pow(2, 3) --> </code> Potencia de un número: (${Math.pow(2, 3)})<br>`);

document.write(`<code> Math.exp(1) --> </code> Devuelve (<i>e</i>) elevado a una potencia: (${Math.exp(1)})<br>`);

document.write(`<code> Math.sqrt(16) --> </code> Raíz cuadrada de un número: (${Math.sqrt(16)})<br>`);

document.write(`<code> Math.cbrt(27) --> </code> Raíz cubica de un número: (${Math.cbrt(27)})<br>`);

document.write(`<code> Math.hypot(3, 4) --> </code> Devuelve la hipotenusa formada por dos catetos: ${Math.hypot(3, 4)}<br>`);


document.write(`<br>LOGARITMOS</br>`);
document.write(`<code> Math.log() --> </code> Loratirmo base <i>e</i><br>`);

document.write(`<code> Math.log10() --> </code> Loratirmo base 10<br>`);

document.write(`<code> Math.log2() --> </code> Loratirmo base 2<br>`);


document.write(`<br>FUNCIONES TRIGONOMETRICAS<br>`);
document.write("Estas funciones trabajan en radianes, no esxisten funciones para transformar grados a radianes o viceversa en javascript");

document.write(`<code> Math.sin() --> </code> Seno de un ángulo<br>`);

document.write(`<code> Math.cos() --> </code> Coseno de un ángulo<br>`);

document.write(`<code> Math.tan() --> </code> Tangente de un ángulo<br>`);

document.write(`<code> Math.asin() --> </code> Arco seno de un ángulo<br>`);

document.write(`<code> Math.acos() --> </code> Arco coseno de un ángulo<br>`);

document.write(`<code> Math.atan() --> </code> Arco tangente de un ángulo<br>`);

document.write(`<code> Math.atan2(numerador,denominador) --> </code> Arco tangente de una fracción <br>`);

document.write(`<br>ALEATORIOS<br>`);
document.write(`<code> Math.random() --> </code> Crea un numero aleatorio entre 0 y 1, incluyendo el 0 y excluyendo el 1: (${Math.random()})<br>`);

document.write(`<code> Math.random() --> </code> Crea un numero aleatorio entre 0 y 1, incluyendo el 0 y excluyendo el 1: (${Math.random()})<br>`);

document.writeln(`FUNCION PARA OBTENER UN NUMERO ALEATORIO CON UNA CANTIDAD EXACTA DE DECIMALES`);
document.write(`<pre><code>
    function aleatoriodef(vmax, vmin, decimal) {
      const ndecimal = 10 ** decimal;
      return (Math.floor(Math.random() * (vmax*ndecimal - vmin*ndecimal + 1)) + vmin * ndecimal) / ndecimal;
    }</code></pre><br>`);


document.write(`<br>CONSTANTES<br>`);
document.write(`<code>Math.PI --> </code> (π):  ${Math.PI}<br>`);

document.write(`<code>Math.E --> </code> (<i>e</i>):  ${Math.E}<br>`);