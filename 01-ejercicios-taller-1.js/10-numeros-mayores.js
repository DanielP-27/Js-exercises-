// Completa el siguiente programa para imprimir los números que sean mayores a 10.
// const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
// El resultado debería ser el siguiente:
// 23 40 12 67 24 39
// NOTA: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. Al terminarlo cambia el arreglo original para verificar que funcione con otros números.

// Create a program to print the numbers that are greater than 10. 
// const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
// The result must be: 
// 23 40 12 67 24 39
// NOTE: the exercise must be done with loops and without using the Javascript filter function. Change the numbers in the original array to verify that the program works with other numbers. 

const nums = [12, 7, 22, 46, 88, 2, 30, 67, 24, 97, 5]; 
let numsSuperior = []; 

for (let i = 0; i<nums.length; i++) {
    if (nums[i] > 10) {
        numsSuperior.push(nums[i]);
    }
}

console.log(numsSuperior);

