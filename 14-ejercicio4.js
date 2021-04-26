'use strict'

/*
Mostrar todos los números impares que hay entre dos números introducidos por el usuario
*/

const num1 = parseInt(prompt('Introduce el primer número'));
const num2 = parseInt(prompt('Introduce el segundo número'));

document.write(`los numeros impares entre ${num1} y ${num2} son:`);


    for(let i=num1; i<num2; i++){
        if(i%2 != 0){
            document.write(`<br>${i}`);
        }
    }




