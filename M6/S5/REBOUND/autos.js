import { readFileJson, handleUpdateCar } from "./helpers.js";
import { msgInfo } from "./utils.js";

const optionIn = process.argv.slice(2);

const selectOptions = async (input) => {
  if (input[0] === "leer") await handleReadOption(input[1]);
  else if (input.length === 3) await handleUpdateCar(input[0], input[1], input[2]);
  else msgInfo();
};

const handleReadOption = async (carName) => {
  if (!carName) {
    const data = await readFileJson();
    console.log(data);
  } else await detailsCar(carName);
};

const detailsCar = async (carName) => {
  const data = await readFileJson();
  const car = data[carName];
  console.log(car ? car : `El auto ${carName} no fue encontrado.`);
};

selectOptions(optionIn);
