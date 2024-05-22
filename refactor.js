function mostrarNombre() {
  const nombre = prompt("Cual es tu nombre dev?");

  if (nombre !== null) {
    document.write("Hola me llamo " + nombre);
  } else {
    document.write("El usuario no escribio su nombre");
  }
}

function registrarUsuario() {
  alert("Alerta despues del body");
  const nombre = prompt("Cual es tu nombre?");
  const apellido = prompt("Cual es tu apellido");
  const correo = prompt("Cual es tu correo");
  alert("Hola me llamo " + nombre + " " + apellido);
  alert("Mi correo es " + correo);
  console.log(nombre);
}
