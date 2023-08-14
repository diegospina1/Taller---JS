'use strict';

//Función clásica

function suma(numero1, numero2){
    return numero1 + numero2;
}

//Invocación
console.log(suma(5,7));
let respuesta = suma(3,5);
console.log(respuesta);

//Funciones tipo flecha

const restar = (num1,num2) =>{
    return num1 - num2;
};

console.log(restar(5,4));
