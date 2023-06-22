//Escribe un programa que le pida al usuario ingresar un número.
//Si el número es múltiplo de 3 debe imprimir en la consola bing.
//Si el número es múltiplo de 5 debe imprimir en la consola bong.
//Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
//Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

// Write a program that asks a user to type in a number. 
// If the number is a multiple of 3, the console should print bing.
// If the number is a multiple of 5, the console should print bong.
// If the number is multiple of 3 and 5, the console should print bing-bong. 
// If none of the previous conditions are true, the console should print the same number. 


let number = Number(prompt('por favor ingresa un numero'))
let valor = '';

if( number % 3 === 0 )
    valor = valor + 'bing';

if( number % 5 === 0 )
    valor = valor + 'bong';

else {
    console.log(number);
}

console.log( valor );