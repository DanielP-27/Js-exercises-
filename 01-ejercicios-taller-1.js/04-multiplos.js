//Escribe un programa que le pida al usuario ingresar un número.
//Si el número es múltiplo de 3 debe imprimir en la consola bing.
//Si el número es múltiplo de 5 debe imprimir en la consola bong.
//Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
//Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

let number = Number(prompt('por favor ingresa un numero'))
let valor = '';

if( number % 3 === 0 )
    valor = valor + 'bing';

if( number % 5 === 0 )
    valor = valor + 'bong';

console.log( valor );