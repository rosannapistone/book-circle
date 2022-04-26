import express from "express";
import { Router } from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

const router = express.Router();

// Get all users
router.get("/", (req, res) => {
  if (!req.session.username) {
    return res.status(401).json("You are not authorized, log in!");
  }
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/authenticate", (req, res) => {
  if (!req.session.username) {
    res.status(401).json("You are not authorized, log in!");
  } else {
    res.status(200).json("You're logged in");
  }
});

// Add a new user
router.post("/add", async (req, res) => {
  const username = req.body.username;
  //const password = await bcrypt.hash(req.body.password, 10); //bcrypt?

  const newUser = new userModel({ username, password });

  newUser
    .save()
    .then(() => res.json(password), "User created")
    .catch((err) => res.status(400).json("Error: " + err));
});

// attempt to login a user
router.post("/login", async (req, res) => {
  // Check if username & password is correct
  userModel.findOne({ username: req.body.username }, function (err, user) {
    logInUser(user);
  });

  async function logInUser(user) {
    // Check if username & password is correct
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).json("Wrong username or password");
    }
    // Check if user is already logged in
    if (req.session.username) {
      return res.status(422).json("You are already logged in");
    }

    // Create session
    req.session.username = user.username;
    req.session.userId = user._id;

    // Send a response
    res.send("Successfull login");
  }
});

export default router;

