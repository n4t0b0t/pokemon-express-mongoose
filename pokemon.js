const mongoose = require("mongoose");
require("./db.js");

const pokemonSchema = new mongoose.Schema({
  id: { type: Number, required: true }, //unique: true
  name: { type: String, required: true }
}); //type: [String] means it can be more than one type
const PokemonModel = mongoose.model("Pokemon", pokemonSchema);

// const newPokemon = new PokemonModel({
//   id: 678910,
//   name: "extra bogus Pokemon"
// });

// async function createNewPokemon(newPokemon) {
//   await newPokemon.save();
// }

// createNewPokemon();

module.exports.createNewPokemon = async newPokemon => {
  const newPokemonForInsertion = new PokemonModel(newPokemon);

  return await newPokemonForInsertion.save();
};
