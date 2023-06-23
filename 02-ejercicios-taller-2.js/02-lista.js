// A partir de la siguiente lista.

// const datos = [ 3, null, 'juan', 4.7, true, 'mango', 2023, { nombre: 'Sofia' }, 12, undefined ];
// Contar cuantos valores de tipo number tiene la lista. DONE
// Contar cuantos valores de tipo string tiene la lista. DONE
// A partir de la lista datos crear una lista nueva donde se agrupen todos los valores de tipo number. DONE
// A partir de la lista datos crea una lista nueva donde se agrupen todos los valores de tipo string.  DONE
// Agregar a la lista donde agrupamos todos los valores de tipo string el valor contenido en el único objeto que tiene la lista. DONE
// Partiendo del enunciado del punto anterior requerimos que en cada uno de los pasos de agrupación de valores de tipo number y string cada valor sea eliminado de la lista principal. DONE

// Following the next array:

// const datos = [ 3, null, 'juan', 4.7, true, 'mango', 2023, { nombre: 'Sofia' }, 12, undefined ];
// Count how many number type values the array has.
// Count how many string type values the array has.
// strating from the given array, create a new one to group all the number type values.
// strating from the given array, create a new one to group all the string type values.
// Add to the array whete all the string type values are, the only object of the original array.
// lastly, eliminate all the number and string value types in the original array.

const datos = [ 3, null, 'juan', 4.7, true, 'mango', 2023, { nombre: 'Sofia' }, 12, undefined, { apellido: 'Jimenez' } ];

let string = [];
let number = []; 


for (let i = 0; i < datos.length; i++) {
  //console.log( typeof datos[ i ] );
  if ( typeof datos[ i ] == 'number' ) {
    number.push( datos[ i ] );
    datos.splice(i, 1);
  }
}

for (let i = 0; i < datos.length; i++) {
  //console.log( typeof datos[ i ] );
  if (typeof datos [i] == 'string') {
    string.push(datos [ i ]);
    datos.splice(i, 1);
  }
}

for (let i = 0; i < datos.length; i++) {
  //console.log( typeof datos[ i ] );
  if (typeof datos [i] == 'object' && datos [i] != null ) {
    string.push(datos [ i ]);
    datos.splice(i, 1);
  }
}

for( let itemValue of datos ) {
  if( typeof itemValue == 'object' && itemValue != null ) {
    
    for (const [ _, value ] of Object.entries( itemValue )) {
      // console.log(`${key}: ${value}`);
      string.push( value );
    }
}
}

console.log( string.length);
console.log( number.length);

console.log( string );
console.log( number );
console.log(datos);

