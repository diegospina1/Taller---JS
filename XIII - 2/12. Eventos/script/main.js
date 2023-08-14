'use strict';

//Evento metodo en la etiqueta
const capturaClick = () => {
    alert('Evento click')
};

const capturaMouseOver = () => {
    alert('Mouse Over')
};

const teclaDown = () => {
    console.log('Presiono tecla');
};
//Generar evento por propiedad
const foot = document.querySelector('#footer');

foot.onclick = function () {
    console.log('On click en el footer');
};

//Generar evento por el metodo .addEventListener

const parrafo = document.getElementById('parrafo_1');
parrafo.addEventListener('click', (event) =>{
    console.log('Click en el parrafo'); 
});



