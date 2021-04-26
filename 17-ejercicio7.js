/*
Tabla de multiplicar de un número introducido por pantalla
*/

let num = parseInt(prompt('introduce un número'));

document.write(`La tabla de ${num} es `);

for(let i=0; i<= 10; i++){
   document.write(`<br>${num} x ${i} = ${num*i}`);
}