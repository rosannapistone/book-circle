// Lägg till express och gör router get, post, put, delete
import express from "express";
import bookModel from "../models/book.model.js";

const router = express.Router();

//GET all books
router.get("/", (req, res) => {
  bookModel.find({}).populate("user")
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET logged in users books
router.get("/getownbooks", (req, res) => {
  bookModel.find({user: req.session.user._id}).populate("user")
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
});

//POST books
router.post("/add", async (req, res) => {
    console.log(req.session.user)
try {
  const newBook = new bookModel({
    user: req.session.user,
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    review: req.body.review,
  });
  await newBook.save({
    user: req.session.user,
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    review: req.body.review})
    return res.json('new book posted');
} catch (err) {
  if (err.code === 11000) {
    res.json('Something wrooooong')
    return;
  }
  res.json('error' + err)
}
});

//GET book by id
router.get("/:id", (req, res) => {
  bookModel.findOne({ _id: req.params.id })
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json("Error: " + err));
});

//PUT book by id
router.put("/:id", (req, res) => {
  bookModel.findOneAndUpdate(
    { _id: req.params.id },
    { title: req.body.title, author: req.body.author,
        description: req.body.description, review: req.body.review }
  )
    .then(() => res.json("Book updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//DELETE book by id
router.delete("/:id", (req, res) => {
  bookModel.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.json("Book Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router