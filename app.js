const express = require("express");
const app = express();
const DELAY = 1000;
app.use(express.json());
const pokemon = require("./pokemon");

// let pokemons = [
//   {
//     id: 1,
//     name: {
//       english: "Bulbasaur",
//       japanese: "フシギダネ",
//       chinese: "妙蛙种子"
//     },
//     type: ["Grass", "Poison"],
//     base: {
//       HP: 45,
//       Attack: 49,
//       Defense: 49,
//       SpAttack: 65,
//       SpDefence: 65,
//       Speed: 45
//     }
//   },
//   {
//     id: 2,
//     name: {
//       english: "Ivysaur",
//       japanese: "フシギソウ",
//       chinese: "妙蛙草"
//     },
//     type: ["Grass", "Poison"],
//     base: {
//       HP: 60,
//       Attack: 62,
//       Defense: 63,
//       SpAttack: 80,
//       SpDefence: 80,
//       Speed: 60
//     }
//   }
// ];

// const getPokemon = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(pokemons);
//     }, DELAY);
//   });
// };

// app.get("/", async (req, res, next) => {
//   const output = await getPokemon();
//   res.status(200).json(output);
// });

app.post("/", async (req, res, next) => {
  const output = await pokemon.createNewPokemon(req.body);
  res.status(200).json(output);
});

app.use((err, req, res, next) => {
  console.log("error", err);
  res.status(500); //send status?
});

//delete one
//update one
//find all

module.exports = app;
