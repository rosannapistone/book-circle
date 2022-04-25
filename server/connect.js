// Create connection to the database
import mongoose from "mongoose"

mongoose.connect("mongodb://localhost/bookCircles", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection created!");
});