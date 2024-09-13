import { promises as fs } from "fs";
import { getError } from "./utils.js";

const file = "data.json";

export const readFileJson = async () => {
  try {
    const data = await fs.readFile(file, "utf8");
    return JSON.parse(data);
  } catch (error) {
    getError(file, error);
  }
};

export const handleUpdateCar = async (carName, property, newValue) => {
  try {
    const data = await readFileJson();
    if (data[carName]) {
      data[carName][property] = isNaN(newValue) ? newValue : Number(newValue);
      await fs.writeFile(file, JSON.stringify(data, null, 2), "utf8");
      console.log(`Propiedad '${property}' del auto '${carName}' actualizada a '${newValue}'.`);
    } else console.log(`El auto '${carName}' no existe en el archivo.`);
  } catch (error) {
    console.error("Error modificando el archivo:", error.message);
  }
};
