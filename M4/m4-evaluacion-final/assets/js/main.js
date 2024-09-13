import { Character } from "./Character.js";

const list15 = [1, 2, 3, 4, 5];
const list611 = [6, 7, 8, 9, 10, 11];
const list1217 = [12, 13, 14, 15, 16, 17];

document
  .getElementById("1-5")
  .addEventListener("mouseenter", async () => await handleMouseEnter(list15, "container_1_5", "bg-danger"));

document
  .getElementById("6-11")
  .addEventListener("mouseenter", async () => await handleMouseEnter(list611, "container_6_11", "bg-success"));

document
  .getElementById("12-17")
  .addEventListener("mouseenter", async () => await handleMouseEnter(list1217, "container_12_17", "bg-info"));

const handleMouseEnter = async (ids, containerId, color) => {
  const generator = Character.characterGenerator(ids);
  const { value: character } = await generator.next();
  if (character) addNewElement(containerId, color, character);
};

const addNewElement = async (id, color, character) => {
  const container = document.getElementById(id);
  if (!container.querySelector(`[data-id='${character.id}']`)) {
    const newElement = createNewElement(character, color);
    container.appendChild(newElement);
  }
};

const createNewElement = (character, color = "bg-yellow") => {
  const newElement = document.createElement("div");
  newElement.classList.add("col-12", "col-md-6", "col-lg-4");
  newElement.setAttribute("data-id", character.id);
  newElement.innerHTML = `
    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
      <div class="timeline-icon ${color}"></div>
      <div class="timeline-text">
        <h6>${character.name}</h6>
        <p>Altura: ${character.height} cm</p>
        <p>Peso: ${character.mass} kg</p>
      </div>
    </div>
  `;
  return newElement;
};
