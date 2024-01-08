const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para validar el rango de las notas
function validarRango(nota) {
  return nota >= 0 && nota <= 10;
}

// Función para calcular el promedio
function calcularPromedio(notas) {
  return (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2);
}

// Función principal
function calcularPromedioYMostrarMensaje() {
  // Solicitar datos al usuario
  rl.question("Ingrese el nombre del alumno: ", function(nombreAlumno) {
    rl.question("Ingrese la materia: ", function(materia) {
      var notas = [];

      // Solicitar tres notas y validar el rango
      function pedirNota(i) {
        rl.question(`Ingrese la nota #${i + 1} para ${materia}: `, function(nota) {
          nota = parseFloat(nota);

          // Validar el rango de la nota
          if (!validarRango(nota)) {
            console.log("La nota ingresada no está en el rango válido (0-10). Por favor, inténtelo de nuevo.");
            pedirNota(i);
          } else {
            notas.push(nota);
            if (i < 2) {
              pedirNota(i + 1);
            } else {
              // Calcular el promedio
              var promedio = calcularPromedio(notas);

              // Mostrar mensaje según el resultado
              if (promedio >= 7) {
                console.log(`${nombreAlumno}, ¡felicidades! Has aprobado con un promedio de ${promedio}`);
              } else {
                console.log(`${nombreAlumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio}`);
              }

              // Cerrar la interfaz de readline
              rl.close();
            }
          }
        });
      }

      // Comenzar el proceso de pedir las notas
      pedirNota(0);
    });
  });
}

// Llamar a la función principal
calcularPromedioYMostrarMensaje();