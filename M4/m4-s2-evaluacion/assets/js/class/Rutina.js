import { Sentadillas } from "./ejercicios/Sentadillas.js";
import { Banco } from "./ejercicios/Banco.js";
import { PesoMuerto } from "./ejercicios/PesoMuerto.js";
import { Prensas } from "./ejercicios/Prensas.js";

const listado = [new Sentadillas(), new Banco(), new PesoMuerto(), new Prensas()];

export class Rutina {
  constructor(semanas, dias) {
    this.semanas = semanas;
    this.dias = dias;
    this.ejercicios = listado;
  }

  *generarRutina() {
    const totalDias = this.semanas * this.dias;
    let i = 0;

    for (let dia = 1; dia <= totalDias; dia++) {
      const ejercicio = this.ejercicios[i];
      yield ejercicio.descripcion();
      i = (i + 1) % this.ejercicios.length;
    }
  }
}
