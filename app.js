/**
 * El nombre de la funcion, siempre debe acabar en un verbo infinitivo
 * La functions son acciones
 * Puede contener n lineas de codigo
 */
function nombreDeLaFuncion() {
  // Dentro de la funcion pueden crear variables, usar condicionales
  // prompt("Ingresa tu nombre");
  // las funciones puede retornar algo o no retornar nada
  return "hola";
}

// Para poder ejecutar el codigo de la funcion
const mensaje = nombreDeLaFuncion();
console.log(mensaje);

function solicitarNumero() {
  const numero = prompt("Ingrese un numero");
  return Number(numero);
}

function sumar2() {
  const numero1 = solicitarNumero();
  const numero2 = solicitarNumero();

  /**
   * isNaN(10) -> false
   * isNaN("hola") -> true
   */
  // if (isNaN(numero1)) es igual a if (isNaN(numero1) === true)
  // if (!isNaN(numero1)) es igual a if (isNaN(numero1) === false)
  console.log(!isNaN(numero1) && !isNaN(numero2));
  if (!isNaN(numero1) && !isNaN(numero2)) {
    return numero1 + numero2;
  } else {
    return "La suma no se pudo hacer.";
  }
}

// NO puede ser accedidad fuera de la funciona
// console.log("Number1", numero1);
// console.log("Number2", numero2);

const resultado2 = sumar2();
console.log("Resultado2", resultado2);

function saludar(nombre) {
  prompt("Ingresa tu nombre");
  console.log("Hola me llamo " + nombre);
}

saludar("Pepe");
saludar("Bruno");
saludar("Linder");
saludar("Alex");
// Creemos una funcion que sume 2 numeros usando prompt
// function sumar() {
//   const numero1 = prompt("Ingrese el numero1");
//   const numero2 = prompt("Ingrese el numero2");
//   // Nos dimos cuenta que la información que viene de prompt son siempre strings
//   // por ende, debemos convertir ese string a un number
//   console.log(typeof Number(numero1), typeof numero2);
//   return Number(numero1) + Number(numero2);
// }

// const resultado = sumar();
// console.log("Resultado", resultado);
