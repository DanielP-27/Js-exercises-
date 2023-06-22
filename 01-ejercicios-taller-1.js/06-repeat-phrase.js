//Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces:

let phrase = prompt ('Por favor ingrese una frase');
let number = Number(prompt('Por favor ingrese un numero'));
let i = 0; 

while (i < number) {      
  console.log(phrase);    
  i++                     
}
