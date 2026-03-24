//Seleccionar elementos del DOM
const cantidadSelecc = document.getElementById("tamano");
const formatoSelecc = document.getElementById("formato");
const boton = document.getElementById("generar");
const contenedor = document.getElementById("paleta");

//Función para uso de toast
const toast = document.getElementById("toast");

function mostrarToast(mensaje) {
  toast.textContent = mensaje;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
}

//Creación de funciones para generar colores de manera aleatoria
function generarHSL() {
  const h = Math.floor(Math.random() * 360); // Hue es un valor de 0 a 360
  const s = Math.floor(Math.random() * 100); // Stauration es un valor de 0 100
  const l = Math.floor(Math.random() * 100); // Light es un valor de 0 a 100

  return `hsl(${h}, ${s}%, ${l}%)`;
}

function generarHEX() {
  const hex = Math.floor(Math.random() * 16777215) // 16777215 valor máximo de hexadecimales
    .toString(16) // convierte el número a hexadecimal
    .padStart(6, "0"); // rellena con 0 si no se completan los 6 números del formato hezadecimal
  return "#" + hex; // retorna el color hexadecimal
}

//Generar paleta de colores en HSL o HEXADECIMAL
boton.addEventListener("click", function () {
  //Limpiamos el contenedor antes de generar la paleta de colores
  contenedor.innerHTML = "";

  const cantidad = cantidadSelecc.value;
  const formato = formatoSelecc.value;

  for (let i = 0; i < cantidad; i++) {
    let color;

    //Comprobamos el formato elegido por el usuario
    if (formato === "HEX") {
      color = generarHEX();
    } else {
      color = generarHSL();
    }

    //Generar tarjetas
    const card = document.createElement("div");
    card.classList.add("tarjeta-color");

    //Generar texto en la tarjeta
    const texto = document.createElement("span");
    texto.textContent = color;

    //Pintar el color en la tarjeta
    card.style.backgroundColor = color;

    //Insertar texto en la tarjeta
    card.appendChild(texto);

    // Evento copiar color al portapapeles
    card.addEventListener("click", function () {
      navigator.clipboard.writeText(color);

      mostrarToast(`Copiado: ${color}`);

      console.log("Color copiado:", color);
    });

    //Insertar la tarjeta en el contenedor
    contenedor.appendChild(card);
  }

  //Microfeedback de paleta generada al usuario
  mostrarToast("¡Paleta Generada Correctamente!");
  console.log("Paleta generada de manera correcta");
});
