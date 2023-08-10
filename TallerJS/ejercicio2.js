/*
Presentado por: Danna García, Diego Ospina

2. Calcular el sueldo a pagar de un trabajador dado que se debe ingresar 
la cantidad de horas trabajadas y el valor de la hora en pesos.
*/

'use strict';

const sueldo = (horasTrabajadas, valorHora) =>{
    const response = (horasTrabajadas >= 0 && valorHora > 0 ) ? horasTrabajadas * valorHora : "No es posible calcular el sueldo";
    console.log(response);
    return response;
};

let horasTrabajadas = parseFloat(prompt('Digite la cantidad de horas trabajadas: '));
let valorHora = parseFloat(prompt('Digite el valor de la hora en pesos: '));

alert("El sueldo total a pagar es: $ " + sueldo(horasTrabajadas, valorHora));

