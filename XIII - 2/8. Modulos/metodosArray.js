'use strict';

let cadMeses = "Enero-Febrero-Marzo-Abril-Mayo-Junio";
let myArray = cadMeses.split("-");
console.log(myArray);

// 1. Buscar, elemento en un arreglo, si no lo encuentra devueLve 
// undefined

const busqueda = myArray.find((e) => e === "Febrero");
console.log(busqueda);

//2. Buscar indice sino lo encuentra devuelve -1
const indice = myArray.findIndex((e) => e === "Mayo");
console.log(indice);

// 3. Crea un objeto iterable 
const array = [3,4,5,6,8,9];
const arrayCuadrados = Array.from(array, (e) => e * e);
console.log(typeof(arrayCuadrados));
console.log(arrayCuadrados);

// 4. Filtrar 

const result = array.filter((e) => e % 3 === 0);
console.log(result);