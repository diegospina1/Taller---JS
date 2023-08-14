'use strict';

//1. Pedir dos números positivos y realizar una suma, retornar el valor

//ds: suma
//de: dos números positivos

const sumar = (num1, num2) => {
    const response = (num1 > 0 && num2 > 0) ? num1+num2 : "No se puede realizar la suma";
    console.log(response);
    return response; 
};
let num1 = parseFloat(prompt('Dame el primer valor: '));
let num2 = parseFloat(prompt('Dame el segundo valor: '));

alert(sumar(num1 + num2));
