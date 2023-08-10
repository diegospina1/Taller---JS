/* 
Presentado por: Danna García, Diego Ospina.

1. Dados dos números ingresados por el usuario, realizar las 4
operaciones básicas, suma, resta, multiplicación y división. Imprimir las
operaciones y validar la división entre 0.
*/

'use strict';

const suma = (num1, num2) =>{
    const response = (num1 > 0 && num2 > 0) ? num1 + num2 : "No se puede realizar la operación";
    console.log(response);
    return response; 
};


let num1 = parseFloat(prompt('Digite el primer valor: '));
let num2 = parseFloat(prompt('Digite el segundo valor: '));

alert("El resultado de la suma es: " + suma(num1, num2));

const resta = (num1, num2) =>{
    const response = (num1 > 0 && num2 > 0) ? num1 - num2 : "No se puede realizar la operación";
    console.log(response);
    return response; 
};

alert("El resultado de la resta es: " + resta(num1, num2));

const multiplicacion = (num1, num2) =>{
    const response = (num1 > 0 && num2 > 0) ? num1 * num2 : "No se puede realizar la operación";
    console.log(response);
    return response; 
};

alert("El resultado de la multiplicación es: " + multiplicacion(num1, num2));

const division = (num1, num2) =>{
    const response = (num1 > 0 && num2 > 0) ? num1 / num2 : "No se puede dividir por 0 (Cero).";
    console.log(response);
    return response; 
};

alert("El resultado de la división es: " + division(num1, num2));
