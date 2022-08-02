const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('#pid');
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