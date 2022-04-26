// Lägg till express och gör router get, post, put, delete
import express from "express";
//import fs from "fs"
import Router from "express";
import bookModel from "../models/book.model.js";
//import CreatePost from "../../client/src/components/CreatePost"

const router = express.Router();

//const router = require("express").Router();
//let Book = require("../models/book.model");

//import {Book} from "../models/book.model.js"

router.get("/", (req, res) => {
  bookModel.find()//.populate('user') // for att fa tag pa user pa clientsidan, hamta user.name typ
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
});



router.get("/getownbooks", (req, res) => {
  //bookModel.find({ userId: req.session.userId })
  then((books) => res.json(books))
  .catch((err) => res.status(400).json("Error: " + err))
});


router.post("/add", (req, res) => {
  /* if (!req.session.username) {
    return res.status(400).json("You are not logged in");
  } */

  //const username = req.session.username;
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const review = req.body.review;

  const newBook = new bookModel({ /* userId, username, */ title, author, description, review });

  newBook
    .save()
    .then(() => res.json("Book posted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
  bookModel.findOne({ _id: req.params.id })
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.put("/:id", (req, res) => {
  bookModel.findOneAndUpdate(
    { _id: req.params.id },
    { title: req.body.title, author: req.body.author,
        description: req.body.description, review: req.body.review }
  )
    .then(() => res.json("Book updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
  bookModel.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.json("Book Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//module.exports = router;
export default router