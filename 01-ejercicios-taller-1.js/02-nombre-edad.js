// Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años.

// Write a program that asks a user their birth year and name, then, print in the console their current age with the phrase "hello X, awesome you are X years old. Assume that the current year is 2020 and that the user type in 2000, the program must print in the console "hello X, awesome, you are 20 years old".

let nombre = prompt ('Por favor ingrese su nombre');
let nacimiento = Number(prompt ('Por favor ingrese su año de nacimiento'));
let año = 2020; 

let result = (año - nacimiento); 
console.log('Hola ' + nombre + ' grandioso! ' + 'tienes ' + result + ' años' );
