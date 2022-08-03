const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('btnCalcular');
const result = document.querySelector('#result');

// function sumarInputValues(event) {
//   console.log({event});
//   event.preventDefault(); // Evita que se recargue la pagina
//   const sumaInputs = Number(input1.value) + Number(input2.value);
  
//   result.innerText = 'Resultado: ' + sumaInputs;
// }

// form.addEventListener('submit', sumarInputValues);

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
  const sumaInputs = input1.value + input2.value;
  result.innerText = 'Resultado: ' + sumaInputs;
}