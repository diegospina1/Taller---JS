'use strict';
// Creación de elemento
const seccion = document.createElement('section');
// Asignación de atributos al elemento
seccion.textContent = "Hola Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit reprehenderit quae beatae odio animi quo assumenda, dolor consequuntur ipsam praesentium tempore modi autem optio sed eaque atque quibusdam! Quo, a.";

seccion.id = "sección3";
seccion.setAttribute("name", "seccion3");
seccion.className = "seccion3";
seccion.style ="color: brown; font-size: 26px;";

//Insertar el elemento en el documento
document.body.appendChild(seccion);
let seccion1 = document.getElementById('sec1');
seccion1.appendChild(seccion);

seccion.innerHTML = "<p><strong>Hola me cambiaron</strong></p>"; //Renderiza las etiquetas
seccion.textContent = "<p><strong>Hola me cambiaron</strong></p>"
seccion.innerHTML = "<p><strong><i>Hola</i> me cambiaron</strong></p>";