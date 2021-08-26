// 18.3 EJERCICIO 3
// Crear un array llamado meses y que almacene el nombre de los doce meses del año.
//  Mostrar por pantalla los doce nombres utilizando la función console.log().

var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre",
  "octubre", "noviembre", "diciembre" ];

// print the array
const printMeses = meses => {
  meses.forEach(mes => {
    console.log(mes);
  });
};

printMeses(meses);