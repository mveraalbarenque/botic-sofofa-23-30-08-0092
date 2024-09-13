export class Character {
  constructor(id, name, height, mass) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.mass = mass;
  }

  static async fetchCharacter(id) {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await response.json();
    return new Character(id, data.name, data.height, data.mass);
  }

  static async *characterGenerator(listIDs) {
    const ids = [...listIDs];

    while (ids.length > 0) {
      const randomIndex = Math.floor(Math.random() * ids.length);
      const randomId = ids.splice(randomIndex, 1)[0];
      const character = await Character.fetchCharacter(randomId);
      if (character) yield character;
    }
  }
}
