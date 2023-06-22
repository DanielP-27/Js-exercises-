//Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

//Write a programm that asks two numbers from a user, then, the console should print the numbers within the range of the two numbers given by them, for example, if the user type 5 as the first numbers and 10 as second, the programm should print: 

let number1 = Number(prompt('Por favor ingresa un primer numero'))
let number2 = Number(prompt('Por favor ingresa un segundo numero'))
let i = number1;

for (i >= number1; i <= number2; i++) {
    console.log(i);
}
