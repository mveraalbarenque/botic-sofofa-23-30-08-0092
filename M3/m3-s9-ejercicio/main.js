let jugadores = [];
let resultados = [];

const agregarJugador = () => {
  const nombre = prompt("Ingrese el nombre del jugador:").trim();

  if (nombre) {
    const jugador = crearProxyJugador({ nombre });
    jugadores.push(jugador);
    actualizarListaJugadores();
  } else alert("Nombre inválido, intente nuevamente");
};

const crearProxyJugador = (jugador) => {
  const jugadorProxy = { ...jugador, id: Symbol(jugador.nombre) };
  return new Proxy(jugadorProxy, {
    set(target, prop, value) {
      if (prop === "nombre" && value.trim()) Reflect.set(target, prop, value);
      else {
        console.error("Error: nombre inválido");
        return false;
      }
    },
    get(target, prop) {
      return prop === "id" ? target[prop] : Reflect.get(target, prop);
    },
  });
};

const lanzarDados = () => {
  if (jugadores.length < 2) alert("Necesita al menos dos jugadores");

  const mesaDados = document.getElementById("mesaDados");
  mesaDados.innerHTML = jugadores.map(() => '<div class="dice rolling"></div>').join("");

  setTimeout(() => {
    resultados = jugadores.map((jugador, index) => {
      const resultado = getRandomDiceValue();
      mesaDados.children[index].textContent = resultado;
      mesaDados.children[index].classList.remove("rolling");
      return { ...jugador, resultado };
    });

    determinarGanador();
  }, 2000);
};

const getRandomDiceValue = () => Math.floor(Math.random() * 6) + 1;

const determinarGanador = () => {
  const maxResultado = Math.max(...resultados.map((j) => j.resultado));
  const ganadores = resultados.filter((j) => j.resultado === maxResultado);
  mostrarResultado(ganadores.length === 1 ? ganadores[0].nombre : "Empate");
};

const mostrarResultado = (ganador) => {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = ganador === "Empate" ? "Empate" : `El ganador es: ${ganador.trim().replace(/\s+/g, " ")}`;
  resultadoDiv.classList.remove("d-none");
};

const actualizarListaJugadores = () => {
  document.getElementById("jugadoresList").innerHTML = jugadores
    .map((jugador) => `<li class="list-group-item">${jugador.nombre}</li>`)
    .join("");
};
