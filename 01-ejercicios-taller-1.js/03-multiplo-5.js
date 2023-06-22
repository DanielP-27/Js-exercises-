// Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
//Si es múltiplo debe imprimir Si, el número x es múltiplo 5, de lo contrario debe imprimir No, el número x no es múltiplo de 5.

// Write a program that asks a user a number and prints if it is a multiple of 5 or not. 
// If the number is a multiple of 5, the program must print 'Yes, the number x is a multiple of 5'. Otherwise must print 'No, the number is not a multiple of five.'

let number = Number(prompt('por favor ingrese un numero'))

if (number %5==0) {
    console.log('Si, el numero ' + number + ' es multiplo de 5');
}

else {
    console.log('No, el numero ' + number + ' No es multiplo de 5');
}