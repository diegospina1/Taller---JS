/*
Presentado por: Danna García, Diego Ospina

3. Realizar la suma de N número ingresados por el usuario.
*/ 
let acumulador = 0;

let tamaño = parseFloat(prompt('Digite cuántos números desea sumar'));

for(let i = 0; i < tamaño; i++){
    let num = parseFloat(prompt('Digite el ' + (i+1) + " numero: "));
    acumulador = num + acumulador;
    num = 0;
};

alert("La suma es: " + acumulador);