import express from "express";
import mongoose from "mongoose";
import userModel from "./models/user.model.js";
const hostname = "localhost";
const port = 5500;
import fs from "fs"

mongoose.connect(
  "mongodb://localhost:27017/BookCircles",
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.error("Kunde inte koppla upp databasen!");
    }
    console.log("Databasen är kopplad!");
  }
);



const app = express();
app.use(express.json());
app.use("/", express.static("public"));



app.get("/", async (req, res) => {
  try {
    const users = await userModel.find({});
    res.json(users);
  } catch (err) {
    console.log(err);
    res.send("Other error...");
  }
});

app.post("/createAccount", async (req, res) => {
  try {
    const user = new userModel({
      username: req.body.username,
      password: req.body.password,
      mail: req.body.mail,
      isAdmin: req.body.isAdmin,
    });
    console.log(user);
    await user.save();

    res.json(user);
  } catch (err) {
    if (err.code == 11000) {
      res.send("Username already exists...");
      return;
    }
    res.send("Other error poop...");
  }
});



app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel.findByIdAndUpdate(id, req.body);

    res.json({
      old: user,
      new: req.body,
    });
  } catch (err) {
    if (err.code == 11000) {
      res.send("Username already exists...");
      return;
    }
    res.send("Other error...");
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removedUser = await userModel.findByIdAndRemove(id);
    if (!removedUser) {
      res.send("Id existerar ej!");
      return;
    }
    res.json(removedUser);
  } catch (err) {
    res.send("Other error...");
  }
});

app.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
// const userSchema = mongoose.Schema({
//   userName: String,
//   mail: String,
//   password: String,
//   id: String,
// });

// const User = mongoose.model("User", userSchema);

// const firstUser = new mongoose.Schema({
//   userName: "robertha",
//   mail: "mail",
//   password: "qwerty123",
//   id: "12",
// });

// await firstUser.save();
// console.log(firstUser.userName, firstUser.password);

// const users = await User.find();
// console.log(users);
