'use strict'

/*
Mostrar en el navegador todos los números divisores de un número introducido en un prompt.
*/
let num = parseInt(prompt('Introduce un número'));

document.write(`los numeros divisores de ${num} son:`);

for(let i=0; i<= num; i++){
    if(num%i  ==0){
        document.write(`<br>${i}`);
    }
}


