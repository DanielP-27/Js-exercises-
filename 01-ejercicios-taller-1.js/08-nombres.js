// Crea un programa a partir de las siguientes instrucciones:
// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímelo.


let names = ['Pedro', 'Pablo', 'María', 'Juan', 'Diana'];
let name1 = prompt('Por favor ingrese un nombre');
let name2 = prompt ('Por favor ingrese otro nombre')

names.push(name1);
names[2] = name2;

console.log(names);