const handler = {
  set(target, property, value) {
    if (property === "edad" && value < 18) alert("La edad debe ser mayor o igual a 18 años para hacer una reserva.");
    else target[property] = value;
    return true;
  },
};

const reserva = new Proxy({}, handler);

const handleEnviar = (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const correo = document.getElementById("correo").value;
  const fecha = document.getElementById("fecha").value;
  const edad = document.getElementById("edad").value;

  reserva.nombre = nombre;
  reserva.apellido = apellido;
  reserva.correo = correo;
  reserva.fecha = fecha;
  reserva.edad = parseInt(edad, 10);

  console.log(reserva);
};
