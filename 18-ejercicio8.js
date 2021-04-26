'use strict'

/*
Hacer una calculadora que pida dos números por pantalla.
Si metemos uno mal que nos los vuelva a pedir.
En el cuerpo de la página y por la consola el resultado
de sumar, restar, multiplicar y dividir esas dos cifras.
*/
const num1 = parseInt(prompt('Introduce el primer número'));
const num2 = parseInt(prompt('Introduce el segundo número'));

document.write(`${num1} + ${num2} = ${suma(num1, num2)} <br>`);
document.write(`${num1} - ${num2} = ${resta(num1, num2)}<br>`);
document.write(`${num1} * ${num2} = ${multiplica(num1, num2)}<br>`);
document.write(`${num1} / ${num2} = ${divide(num1, num2)}<br>`);
   
function suma(a, b){
       return a + b;
   }

function resta(a, b){
       return a - b;
   }

function multiplica(a, b){
       return a * b;
   }

function divide(a, b){
       return a / b;
   }
