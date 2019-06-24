const app = require("./app");
const request = require("supertest");

describe("get unit test w/o database", () => {
  const pokemonData = [
    {
      id: 1,
      name: {
        english: "Bulbasaur",
        japanese: "フシギダネ",
        chinese: "妙蛙种子"
      },
      type: ["Grass", "Poison"],
      base: {
        HP: 45,
        Attack: 49,
        Defense: 49,
        SpAttack: 65,
        SpDefence: 65,
        Speed: 45
      }
    },
    {
      id: 2,
      name: {
        english: "Ivysaur",
        japanese: "フシギソウ",
        chinese: "妙蛙草"
      },
      type: ["Grass", "Poison"],
      base: {
        HP: 60,
        Attack: 62,
        Defense: 63,
        SpAttack: 80,
        SpDefence: 80,
        Speed: 60
      }
    }
  ];

  it("GET/ should return list of pokemon in array", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(pokemonData);
      });
  });
});
