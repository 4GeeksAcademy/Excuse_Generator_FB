/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Genera excusas al cargar la página
window.onload = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  //Recorre cada elemento de un array dado calculando un número aleatorio entre 0 (inclusivo) y array.length (exclusivo).
  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  } //retorna el elemento del array utilizando el número aleatorio como index, por lo tanto, retorna

  document.getElementById("excuse").innerHTML = `${randomElement(
    who
  )}  ${randomElement(action)}  ${randomElement(what)}  ${randomElement(when)}`;
};
//Crea una función llamada generateExcuse
const generateExcuse = () => {
  //Dentro de la función creamos un array de arrays
  const arrays = [
    ["The dog", "My grandma", "The mailman", "My bird"],
    ["ate", "peed", "crushed", "broke"],
    ["my homework", "my phone", "the car"],
    [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ]
  ];
  //Creamos una variable excuse donde utilizamos el método reduce.
  //Entregamos dos elementos. Un acumulador y el array
  const excuse = arrays.reduce((acc, arr) => {
    //Reduce iterará por cada array dentro de arrays. randomString seleccionará el index elegido por medio de un número aleatorio
    const randomString = arr[Math.floor(Math.random() * arr.length)];
    //Dado que al iterar por primera vez el acumulador estará vacío utilizamos operador ternario
    return acc ? `${acc} ${randomString}` : randomString;
  }, " "); // Si acc está vacío otorgará falso, por lo que solo retornara randomString. Si el acc tiene algún elemento nos otorgará verdadero
  //Concatenando lo que ya había dentro del acc con el nuevo valor generado por randomString con un espacio entre ambos.
  document.getElementById("excuse").innerHTML = excuse;
};

document
  .getElementById("generateExcuse")
  .addEventListener("click", generateExcuse);
