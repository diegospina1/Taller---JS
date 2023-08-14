'use strict';

const seccion3 = document.createElement("section");

// Atributos
seccion3.textContent = "Hola fui creado desde JS";
seccion3.id = "sec3";
seccion3.className = "seccion3";
seccion3.style = "color: white;font-size:24px;padding:10px;text-align:center";

// Insertar elemento en el documento

document.body.appendChild(seccion3);
