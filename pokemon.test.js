const pokemon = require("./pokemon.js");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const app = require("./app.js");
const request = require("supertest");

describe("unit test should insert one pokemon entry correctly", () => {
  let connection;
  let db;

  beforeAll(async () => {
    const mongoURI = global.__MONGO_URI__;
    connection = await MongoClient.connect(mongoURI, {
      useNewUrlParser: true
    });
    const uriArray = mongoURI.split("/");
    const dbName = uriArray[uriArray.length - 1];
    console.log(dbName);
    db = await connection.db(dbName);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await connection.close();
  });

  beforeEach(async () => {
    await db.dropDatabase();
  });

  const testData = { name: "Test_Pokemon_A", id: 111111 };

  it("should insert a pokemon into collection pokemons ", async () => {
    await pokemon.createNewPokemon(testData);

    const pokeInstance = db.collection("pokemons"); //
    // console.log(pokeInstance.find({ name: "Pikachu" }));
    //fetching
    const foundNewPokemon = await pokeInstance.findOne(testData);
    expect(foundNewPokemon.name).toEqual("Test_Pokemon_A");
    expect(foundNewPokemon.id).toEqual(111111);
  });

  it.only("POST/ should insert a pokemon into collection pokemons", async () => {
    await request(app)
      .post("/")
      .send(testData);
    const pokeInstance = db.collection("pokemons");
    const foundNewPokemon = await pokeInstance.findOne(testData);
    expect(foundNewPokemon.name).toEqual("Test_Pokemon_A");
    expect(foundNewPokemon.id).toEqual(111111);
  });
});
