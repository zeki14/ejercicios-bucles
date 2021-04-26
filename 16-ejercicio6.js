'use strict'

/*
Se le pide a un usuario por pantalla (prompt) un número y el programa nos tiene que mostrar si es par o impar.
Si el número introducido no es válido nos pide de nuevo el número.

*/
// let num = parseInt(prompt('Introduce un número'));
// console.log(num);
// console.log(typeof(num));

// if(num === NaN){
//     prompt('Por favor, introduce un número')
// }else{
//     if(num%2 == 0){
//         document.write(`${num} es un numero par`);
//     }else{
//         document.write(`${num} es un numero impar`);
//     }
// }

let num;

do {
    num = parseInt(prompt('Por favor, introduce un número'));
} while (isNaN(num))

if(num%2 == 0){
         document.write(`${num} es un numero par`);
        }else{
           document.write(`${num} es un numero impar`);
    }