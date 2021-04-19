// // Validar contraseña
// // Tenemos los datos de distintas personas que quieren crear un user dentro de GMail
// // Todos los datos se guardan como objetos con las propiedades: nombre, apellido, email y password
// // Nos pidieron implementar una función, llamada validarPassword, que recibe estos objetos y valide la contraseña
// // La función nos tiene qu retornar un objeto con dos propiedades: verificada (un boolean que es true cuando la contraseña pasa las validaciones, o false en caso contrario) y mensaje (un string que contiene el mensaje de la validación que falló, o vacío si salió todo bien)
// // De la contraseña tenemos que validar:
// // Que la longitud sea mayor o igual a 6 (si es menor, retornar el mensaje "Contraseña con menos de 6 caracteres")
// // Que la contraseña no sea una de: "123456", "password", "111111", "qwerty" (si coincide con alguna de esas contraseñas, retornar el mensaje "Contraseña muy insegura")

// const user1 = {
//   nombre: 'Grace',
//   apellido: 'Hopper',
//   email: 'grace.hopper@gmail.com',
//   password: '123456'
// };

// const user2 = {
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   password: '**178!Ada--'
// };

// const user3 = {
//   nombre: 'Hedy',
//   apellido: 'Lamarr',
//   email: 'hlamarr@gmail.com',
//   password: '1234'
// };

// const validarPassword = obj => {
//   const respuesta = {
//     verificada: true,
//     mensaje: ''
//   }
//   if(obj.password.length < 6){
//     respuesta.verificada = false
//     respuesta.mensaje = "Contraseña con menos de 6 caracteres";
//   } else if(
//     obj.password === '123456'|| 
//     obj.password === '111111' || 
//     obj.password === 'qwerty'
//   ){
//     respuesta.verificada = false
//     respuesta.mensaje = "Contraseña muy insegura";
//   }
//   return respuesta
// }

// // CODEA ACA LA SOLUCION

// // casos de prueba
// console.log('user1:', validarPassword(user1)); // { verificada: false, mensaje: 'Contraseña muy insegura' }
// console.log('user2', validarPassword(user2)); // { verificada: true, mensaje: '' }
// console.log('user3', validarPassword(user3)); // { verificada: false, mensaje: 'Contraseña con menos de 6 caracteres' }


// Obtener experiencia

// Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida
// (Pista) deberia recorrer todo uno de los objeto que nos pasan por parametro,haciendo refencia al indice(EASE,MEDIUM,HARD)
// (Pista) deberia crear un acumulador para sumar los puntajes parciales
// (Pista) deberia tomar los valores de ambos objetos con el mismo indice y multiplicarlo

// const score = { EASY: 10, MEDIUM: 50, HARD: 100 };
// const challenges = { EASY: 3, MEDIUM: 4, HARD: 2 };

// const getXP = (obj1, obj2) => {
//   let count = 0;
//   for(key in challenges){
//     count += obj1[key] * obj2[key]
//   }
//   return count
// }

// console.log(getXP(score, challenges))

// getXP(challenges, score); // returns 430 (3 * 10 + 4 * 50 + 2 * 100)


              // Spread Operator
// Crear la función contarLosArgumentos, que toma un número variable de parámetros y retorna la cantidad de parámetros que tiene
// Utilizar Rest Operator

// const arreglo = [1,2,3,4,5];

// const contarLosArgumentos = (...arr) => {
//   console.log(arr.length);
//   // [1,2,3,4,5,10];
//   // arr.push(10)
//   // console.log(arr)
// }
// // contarLosArgumentos(...arreglo)
// // console.log(arreglo);

// contarLosArgumentos('uno', 'dos'); // 2
// contarLosArgumentos('uno', 'dos', 'tres', 'cuatro'); // 4
// contarLosArgumentos(5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17); // 16


// Ejercicio 9
// Escribir la función alCuadradoYSumar, que toma un número variable de parámetros, los eleva al cuadrado y retorna la suma de todos
// Utilizar Rest Operator

// const alCuadradoYSumar = (...arr) => {
//   const result = arr.reduce((inicial, currentValue) => Math.pow(currentValue, 2) + inicial ,0)
//   console.log(result);
// }

// alCuadradoYSumar(2, 4, 3); //29
// alCuadradoYSumar(1, 2); //5

// Ejercicio 10
// Tengo un array con arrays adentro
// Tomando la idea del ejercicio 3, ¿cómo podemos implementar una solución que desde un array de arrays, me retorne un solo array con todos los elementos juntos?

// Heading
// Ya sabemos juntar dos arrays, para hacer varios deberíamos iterar con un for
// Tenemos un array vacío inicialmente, y le vamos agregando (con spread operator) cada nuevo sub array que iteramos
// Entonces: inicializo array vacío, itero por el array de arrays, y agrego cada elemento al array anterior (como hicimos en el ejercicio 1). Cuando termino de iterar, en el array que inicialicé vacío, debería tener el array completo
const fraseEnPartes = [
  ['¡', 'Hola'],
  [',', ' ', 'Mundo'],
  ['!']
];

const fraseCompleta = (fraseEnPartes) => {
  let arr = []
  fraseEnPartes.forEach(element => arr.push(...element))
  console.log(arr.join(''));
}// ACA LA SOLUCION

fraseCompleta(fraseEnPartes)

// console.log( fraseCompleta ); // ¡Hola, Mundo!

// const delUnoAlCinco = [...delUnoAlTres].concat(4, 5)