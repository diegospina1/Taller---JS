'use strict';

// Selección de elemento por ID

const seccion1 = document.getElementById('sec1');
// console.log(seccion1);

// Seleccion de elemento por Class

const mainContainer = document.getElementsByClassName('container_main');
// console.log(mainContainer);

// Seleccion de elementos por name

const arituculos = document.getElementsByName('articulo');
// console.log(arituculos);

// Seleccion de elementos por ID con queryselector

const seccion2 = document.querySelector('#sec2');

// Seleccion por etiqueta

const titulo = document.querySelector('h1');
console.log(titulo);

// Seleccion por class
const seccion2Class = document.querySelector('.seccion2');


const reciboDato = (e) => {

    const texto = document.querySelector('#nombre').value;
    console.log(texto);
};

