const email = "linder@gmail.com";
const password = "linder123";

function validarLogin() {
  // PASO1: Pedir los prompt
  const correo = prompt("Ingrese su correo");
  const contrasena = prompt("Ingrese su contraseña");
  let contador = 0;

  if (contador < 3) {
    if (correo === email && password === contrasena) {
      document.write("Ingreso exitosamente!!! " + correo);
    } else {
      document.write("Hubo un error en el email y/o password");
      contador += 1;
    }
  } else {
    document.write("Llegas al limite de intentos");
  }
}

function validarSiAlMenosUnUsuarioEsMayor() {
  // Nota: Recuerden que todo dato que venga de prompt siempre será un string
  const edad1 = Number(prompt("Ingresa la edad del usuario1"));
  const edad2 = Number(prompt("Ingresa la edad del usuario2"));
  const edad3 = Number(prompt("Ingresa la edad del usuario3"));
  // La teoria dice que 2 iguales comparan el valor, entonces en este caso
  // funcionaría, pero las buenas prácticas dice que debemos usar 3 iguales
  // para comparar en JS
  if (edad1 >= 18 || edad2 >= 18 || edad3 >= 18) {
    document.write("Al menos un usuario es mayor");
  } else {
    document.write("Todos los usuario son menores");
  }
}

function mostrarNumeros() {
  // while es una funcion que se ejecuta en base a una condicion, while es un
  // bucle, por ende para la accion hasta que la condicion sea false
  let contador = 0;

  while (true) {
    console.log("Bucle infinito " + contador);
    contador += 1;
  }
}

function adivinarNumero() {
  let numeroCorrecto = 121;
  let respuestaDelUsuario = null;
  let contadorDeIntentos = 0;

  while (respuestaDelUsuario !== numeroCorrecto) {
    respuestaDelUsuario = Number(prompt("Adivina el número"));

    contadorDeIntentos += 1;

    if (contadorDeIntentos === 5) {
      document.write("Llegaste el limite de intentos");
      break;
    }

    if (respuestaDelUsuario === numeroCorrecto) {
      document.write("Adivinaste el numero \n");
    } else {
      document.write("<p>Sigue intentando " + contadorDeIntentos + "</p>");
    }
  }
}

function imprimirNumeros() {
  /**
   * let i = 0 Valor incial
   * i <= 100 Condicion
   * i++ de cuanto en cuanto van los paasa
   * Nota:
   * i++ = i += 1
   */

  const elementos = [
    {
      title: "¿Qué requisitos necesito para iniciar?",
      text: "Puedes iniciar a estudiar sin tener ningún conocimiento previo sobre programación. Solo debes tener una laptop o tablet con teclado, y muchas ganas de entrar al futuro.",
    },
    {
      title: "¿A qué personas está dirigido?",
      text: " Tanto para personas que quieren iniciar una carrera profesional con gran demanda laboral, como para personas que ya son profesionales ó trabajan en otras industrias, y que quieren dar un salto a un mejor estilo de vida.",
    },
  ];

  for (let i = 0; i <= 100; i++) {
    document.write("<p class='card'>El número es: " + i + "</p>");
  }

  for (let i = 0; i < elementos.length; i++) {
    document.write(
      "<div class='card'><p> " +
        elementos[i].title +
        "</p><p>" +
        elementos[i].text +
        "</p></div>"
    );
  }
}
