document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();

  const formulario = event.target;
  const { nombre, apellido, mail, motivo, mensaje } = formulario;

  const msg = `
    De: ${nombre.value} ${apellido.value} (${mail.value}).
    \n - Asunto: ${motivo.value}.
    \n - Mensaje:
    \n - ${mensaje.value}`;

  alert(msg);

  formulario.reset();
});
