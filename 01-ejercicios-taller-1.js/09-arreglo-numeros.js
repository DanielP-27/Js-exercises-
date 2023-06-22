//Escribe un programa que:
// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

let numbers = Number(prompt('Por favor ingrese un numero')); 
let number1 = [];
 

for (let i = 1; i <= numbers; ++i)
  number1.push(i)
  let number2 = number1.splice(1,1);
  number1.forEach(function(elemento){
    console.log(elemento);
  })
