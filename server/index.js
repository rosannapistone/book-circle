
import mongoose from "mongoose";
import userModel from "./models/user.model.js";
import "./connect.js"
import express from "express"
import cors from "cors"
import booksRouter from "./routes/books.js"

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

app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
  });

// Routes for users
//const usersRouter = require("./routes/users");
//app.use("/users", usersRouter);

// Route for books
app.use("/books", booksRouter);

// Server running
app.listen(3001, () => console.log("Listening at 3001"));

