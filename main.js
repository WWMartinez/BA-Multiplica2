function preguntarNombre() {
  const nombre = prompt("¿Cuál es tu nombre?");

  if (nombre) {
    alert("¡Hola, " + nombre + "! Bienvenido.");
  } else {
    alert("¿Cómo es posible que no tengas nombre?");
  }
}


//preguntarNombre();