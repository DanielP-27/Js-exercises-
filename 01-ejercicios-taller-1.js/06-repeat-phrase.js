//Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces:

// Write a program that asks a user to type in a phrase and a number. The program must print the phrase as many times as the number given by the user. For example, if the user type in the phrase hello world and the number 5, the program must print hello world 5 times. 

let phrase = prompt ('Por favor ingrese una frase');
let number = Number(prompt('Por favor ingrese un numero'));
let i = 0; 

while (i < number) {      
  console.log(phrase);    
  i++                     
}
