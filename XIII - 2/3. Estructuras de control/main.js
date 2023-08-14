'use strict';

//Estructuras de control
let numero1 = 3;
let numero2 = 100;

if ((numero1 > 10) && (numero1 > 0)){
    console.log('es mayor que 10');
}
else{
    if (numero1 % 2 == 0){


    }
    else{

    }
}

//Ternario

let respuesta = (numero2 % 10 === 0) ? "Es multiplo de 10" : "No es multiplo de 10";
console.log(respuesta);

//Switch

let opcion = 3;

switch (opcion){
    case 1:
        console.log("Es el número 1");
        break;
    case 2:
        console.log("El número es 2");
        break;
    case 3:
        console.log("El número es 3");
        break;
    default:
        console.log("Opción fuera de rango");
}   

//Rangos

let nota = 3.5;

switch(true){

    case nota >= 0 && nota < 3:
        console.log("Aplazado");
        break;
    case nota >= 3 && nota <= 5:
        console.log("Aprobado");
        break;
    default:
        console.log("Nota erronea");
}
