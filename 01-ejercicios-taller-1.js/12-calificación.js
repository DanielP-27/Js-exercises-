// 1. Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia (3.5 es la nota mínima para pasar). DONE
// 2. Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota mínima para pasar). DONE


function student1(student, subject1, scoreAverage1, scoreSum) {


  student = prompt ('Por favor ingresa tu nombre')
  subject1 = prompt ('Por favor ingresa el nombre de la materia')

  scoreSum = 0;

  for (let i = 0; i < 3; i++) {
    scoreAverage1 = Number(prompt('Por favor ingresa una calificación')); 
    scoreSum += scoreAverage1;
  }

  scoreSum = scoreSum / 3;

  if (scoreSum >= 0.1 && scoreSum <= 3.4) {
  console.log('Lo siento, ' + student + ' no has aprobado ' + subject1 + ' con ' + scoreSum);
  }
  
  else if (scoreSum > 3.4 && scoreSum <= 5) {
  console.log('Felcidades, ' + student + ' has aprobado ' + subject1 + ' con ' + scoreSum);
  }
  
  else {
  console.log('El valor ingresado no es valido, por favor ingresa un valor numerico entre 0.1 y 5');
  }
}

student1();

