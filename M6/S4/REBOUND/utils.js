import { promises as fs } from "fs";
import axios from "axios";

export const readFile2Json = async (file) => {
  try {
    const data = await fs.readFile(file, "utf8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") console.error(`Error: El archivo '${file}' no existe.`);
    else console.error("Error leyendo el archivo:", error.message);
  }
};

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error al hacer la petición a ${url}:`, error.message);
  }
};
