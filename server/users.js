import User from "./models/userModels.js";
import mongoose from "mongoose";
import express from "express";
const hostname = "localhost";
const port = 3001;

//   let mongoDB = "mongodb://localhost:27017/bookClub";
//   mongoose.connect(mongoDB);

//   mongoose.Promise = global.Promise;

//   let db = mongoose.connection;
//   db.on("error", console.error.bind(console, "MongoDB connection error:"));

//   Object.getOwnPropertyNames(mongoose).forEach((prop) => {
//     console.log(prop);
//   });

mongoose.connect(
  "mongodb://localhost:27017/bookCircle",
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.error("Kunde inte koppla upp databasen!");
    }
    console.log("Databasen är kopplad!");
  }
);

const app = express();
app.use(express.json);

app.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
    res.send("Something went wrong :(");
  }
});

app.post("/post-feedback", async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    console.log(user);
    await user.save();

    res.json(user);
  } catch (err) {
    if (err.code === 11000) {
      res.send("Username already exists...");
      return;
    }
    res.send("Other error...");
  }
});

app.put("/", (req, res) => {
  res.send("Hellooooo!");
});

app.delete("/", (req, res) => {
  res.send("Hellooooo!");
});

// app.listen(port, hostname, () => {
//   console.log(`server is running on http//${hostname}:${port}`);
// });
app.listen(27017, () => {
  console.log("Running");
});
