import express from "express";
import { Router } from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";


const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const users = await userModel.find({});
    res.json(users);
  } catch (err) {
    console.log(err);
    res.send("Other error...");
  }
});

router.post("/createAccount", async (req, res) => {
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



router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
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

export default router;







// Get all users
/* router.get("/", (req, res) => {
  if (!req.session.username) {
    return res.status(401).json("You are not authorized, log in!");
  }
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
}); */

/* router.get("/authenticate", (req, res) => {
  if (!req.session.username) {
    res.status(401).json("You are not authorized, log in!");
  } else {
    res.status(200).json("You're logged in");
  }
}); */

// Add a new user
/* router.post("/add", async (req, res) => {
  const username = req.body.username; */
  //const password = await bcrypt.hash(req.body.password, 10); //bcrypt?

/*   const newUser = new userModel({ username, password });

  newUser
    .save()
    .then(() => res.json(password), "User created")
    .catch((err) => res.status(400).json("Error: " + err));
}); */

// attempt to login a user
/* router.post("/login", async (req, res) => { */
  // Check if username & password is correct
 /*  userModel.findOne({ username: req.body.username }, function (err, user) {
    logInUser(user);
  }); */

  /* async function logInUser(user) { */
    // Check if username & password is correct
    /* if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).json("Wrong username or password");
    } */
    // Check if user is already logged in
    /* if (req.session.username) {
      return res.status(422).json("You are already logged in");
    } */

    // Create session
  /*   req.session.username = user.username;
    req.session.userId = user._id; */

    // Send a response
    /* res.send("Successfull login");
  } */
/* }); */



