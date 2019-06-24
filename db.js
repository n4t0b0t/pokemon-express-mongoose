const mongoose = require("mongoose");

const dbURI = global.__MONGO_URI__ || "mongodb://localhost:27017/pokedex";
mongoose.connect(dbURI, { useNewUrlParser: true });
mongoose.set("useFindAndModify", false);

const db = mongoose.connection;

// Add an error handler to show mongo errors in the Node.js console
db.on("error", error => {
  console.error("An error occurred!", error);
});

db.once("open", () => {
  console.log("connected to mongodb");
});
