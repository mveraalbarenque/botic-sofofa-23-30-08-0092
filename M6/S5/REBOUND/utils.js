export const msgInfo = () => {
  const info = [
    "---------------------------------",
    "*\tOpción no válida\t*",
    "---------------------------------",
    "Para usar este programa, ingrese los argumentos correctos.\n",
    "Ejemplos:",
    "Leer todo el archivo: node autos.js leer",
    "Leer auto específico: node autos.js leer <nombre_auto>",
    "Modificar propiedad: node autos.js <nombre_auto> <propiedad> <valor>",
  ];
  console.log(info.join("\n"));
};

export const getError = (file, error) => {
  if (error.code === "ENOENT") console.error(`Error: El archivo '${file}' no existe.`);
  else console.error("Error leyendo el archivo:", error.message);
};
