const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

//querySelectorAll nos devuelve un array de nodos con todos los elementos que cumplen la condicion, por ejemplo, si hubiesen varios p, querySelectorAll nos devuelve un array con todos los p

// getElementsByClassName nos devuelve un array de nodos con todos los elementos que tengan la clase que le pasemos

console.log(input.value);
// Imprime un objeto con todos los elementos seleccionados. Cada elemento con sus atributos.
console.log({
  h1,
  p,
  parrafito,
  pid,
  input
});

// Insertando texto en un elemento
h1.innerHTML = 'Patito <br> feo'; // Peligroso porque se ejecuta el HTML que se escriba dentro del elemento
h1.innerText = 'Patito <br> feo'; // Solo va a insertar texto plano

// Dar atributos a un elemento
console.log(h1.getAttribute('class')); // Devuelve el valor del atributo class
h1.setAttribute('class', 'black'); // Le ponemos una clase a un elemento. Si ya tiene una clase, la reemplaza

/* NOTA: ATRIBUTOS
  Los atributos son propiedades que se le pueden añadir a un elemento.
  Por ejemplo, un atributo sería "class" o "id".
*/

h1.classList.add('pink'); // Añade una clase a un elemento. NO la reemplaza
h1.classList.remove('pink'); // Elimina una clase de un elemento
h1.classList.toggle('pink'); // Si tiene la clase, la elimina. Si no tiene la clase, la añade.
h1.classList.contains('pink'); // Devuelve true o false si tiene la clase que le pasamos o no

input.value = '456'; // Cambia el valor del input

// Creando elementos
// document.createElement('img'); // Crea un elemento img
console.log(document.createElement('img'));
// console.log(document.createElement('span'));

const img = document.createElement('img');
img.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
img.alt = 'Google';
// img.setAttribute('src', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
console.log(img);

pid.append(img); // Añade un elemento al final de un elemento
// pid.appendChild(img); // Añade un elemento al final de un elemento
// pid.innerHTML = img; // Forma de insertar un elemento. Sobreescribe o reemplaza el contenido del elemento por el elemento que le pasemos. NO INSETAR EL ELEMENTO -> [object HTMLImageElement]

// Para dejar vacio un elemento adecuadamente:
pid.innerHTML = ''; // Vacia el elemento
pid.append(img); // Añade el elemento