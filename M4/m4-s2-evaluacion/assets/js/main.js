import { Rutina } from "./class/Rutina.js";

const datosValidos = (semanas, dias) => {
  return Number.isInteger(semanas) && Number.isInteger(dias) && semanas > 0 && dias > 0 && dias <= 7;
};

const handleClick = (semanas, dias) => {
  let resultado = "";

  const rutina = new Rutina(semanas, dias);
  const generador = rutina.generarRutina();

  const totalDias = semanas * 7;
  const intervaloDias = Math.floor(7 / dias);

  let { value, done } = generador.next();

  let diaActual = 1;
  while (!done && diaActual <= totalDias) {
    resultado += `Día ${diaActual}: ${value}\n`;
    diaActual += intervaloDias;
    ({ value, done } = generador.next());
  }

  return resultado;
};

document.querySelector("button").addEventListener("click", () => {
  const semanas = parseInt(document.getElementById("semana").value, 10);
  const dias = parseInt(document.getElementById("dia").value, 10);

  if (datosValidos(semanas, dias)) {
    const resultado = handleClick(semanas, dias);
    console.log("Semanas:", semanas);
    console.log("dias:", dias);
    console.log(resultado);
    return;
  }
  alert("Por favor, ingresa valores válidos para semanas y días.");
});
