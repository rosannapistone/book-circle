import express from "express";
import { Router } from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

const router = express.Router();

//GET all users
router.get("/all", (req, res) => {
  userModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.get("/", async (req, res) => {
  try {
    const users = await userModel.findById(req.session.user);
    res.json(users);
  } catch (err) {
    console.log(err);
    res.json("Other error...");
  }
});

router.post("/createAccount", async (req, res) => {
  const cryptedPassword = await bcrypt.hash(req.body.password, 10);

  const username = req.body.username;
  const mail = req.body.mail;
  const isAdmin = req.body.isAdmin;

  const user = new userModel({
    username: username,
    password: cryptedPassword,
    mail,
    isAdmin: isAdmin,
  });
  console.log('rad 39:', isAdmin)

  const checkUsername = await userModel.findOne({
    username: req.body.username,
  });
  if (checkUsername) {
    res.status(409).json("username already exist! chose another one.");
    return;
  } else if (!checkUsername) {
    await user
      .save()
      .then(() => res.json(user))
      .catch((err) => res.status(400).json("Error: " + err));
    console.log(user + " USER ADDED");
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const findUser = users.find((user) => user.id === id);

  if (findUser === undefined) {
    return res.status(404).json("Not found!");
  }
  if (findUser) {
    return res.json(findUser);
  }
});


//PUT user by id
router.put("/:id", (req, res) => {
  userModel.findOneAndUpdate(
    { _id: req.params.id },
    { username: req.body.username, isAdmin: req.body.isAdmin }
  )
    .then(() => res.json("User updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//DELETE user by id
router.delete("/:id", (req, res) => {
  userModel.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.json("User Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.post("/login", async (req, res) => {
  const findUser = await userModel.findOne({ username: req.body.username });

if (!findUser) {
  return res.status(401).json("Wrong password or username");
}

  const check = await bcrypt.compare(req.body.password, findUser.password);
  console.log("check " + check);
  
  if (!findUser || !check) {
    return res.status(401).json("Wrong password or username");
  }
   
  req.session.user = findUser;
  res.json(findUser);
});


router.get("/login", (req, res) => {
  if (!req.session.id) {
    return res.status(401).json("You are not logged in");
  }
  res.json(req.session);
});


router.delete("/logout", (req, res) => {
 if (req.session.user){
  req.session = null;
  res.status(200).json("Your are now logged out! hope to see you soon!");
 }else if (!req.session.user) {
     return res.status(404).json("you have to login to logout");
   }
   res.json("other error")
});


export default router;