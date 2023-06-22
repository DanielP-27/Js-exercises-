//Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número.

// Write a program that asks for two numbers from a user. Then, the console should print the numbers within the range of the two numbers given by them, for example, if the user types 5 as the first number and 10 as the second, the console should print: 

//5
//6
//7
//8
//9
//10

let number1 = Number(prompt('Por favor ingresa un primer numero'))
let number2 = Number(prompt('Por favor ingresa un segundo numero'))
let i = number1;

for (i >= number1; i <= number2; i++) {
    console.log(i);
}
