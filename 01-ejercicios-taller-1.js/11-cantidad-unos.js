// Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:
// El resultado debería ser el siguiente:
// 11
// NOTA: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. Al terminarlo, cambia el arreglo original para verificar que funcione con otras combinaciones de ceros y unos.

// create a program that prints the total amount of ones (1) contained in the array:
// the result should be:
// 11
//NOTE: the exercise must be done with loops and without using the Javascript filter function. Change the numbers in the original array to verify that the program works with other combinations of numbers. 


const nums = [ 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0 ]; 
let numberOne = []; 
let sum = 0;

for (let i = 0; i<nums.length; i++) {
    if (nums[i] === 1); {
        sum += nums[i];
    }
}

console.log(sum);

