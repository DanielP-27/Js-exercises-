// Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

let nombre = prompt ('Por favor ingrese su nombre');
let nacimiento = Number(prompt ('Por favor ingrese su año de nacimiento'));
let año = 2020; 

let result = (año - nacimiento); 
console.log('Hola ' + nombre + ' grandioso! ' + 'tienes ' + result + ' años' );
