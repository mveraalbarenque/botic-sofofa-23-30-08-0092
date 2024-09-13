import { readFile2Json, fetchData } from "./utils.js";

const leerTxt = () => {
  const pokemon = readFile2Json("data.txt");
  const numberRandom = (num) => Math.floor(Math.random() * num - 1);

  pokemon.then((res) => {
    if (res) {
      const indexRandom = Math.abs(numberRandom(res.length));
      console.log(res[indexRandom]);
    }
  });
};

const leerJson = () => {
  const urls = readFile2Json("urls.json");
  urls.then((res) => {
    if (res) {
      Object.values(res).forEach((url, i) => {
        setTimeout(async () => {
          const data = await fetchData(url);
          console.log(data);
        }, 3000 * i);
      });
    }
  });
};

leerTxt();
leerJson();
