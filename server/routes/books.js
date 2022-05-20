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


//GET all books offline
router.get("/offline", (req, res) => {
  bookModel.find({})
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET specific users books
router.get("/getownbooks/", (req, res) => {
  bookModel.find({user: req.session.user}).populate("user")
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
});

//POST books
router.post("/add", async (req, res) => {
    console.log(req.session.user)
  if (!req.session.user) {
    return res.status(401).json('You are not logged in')
  }
  
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
    return res.status(200).json("new book posted");
} catch (err) {
  if (err.code === 11000) {
    return res.status(403).json("Something wrooooong")
  }
  return res.json('error' + err)
}
});

//GET book by id
router.get("/:id", (req, res) => {
  bookModel.findOne({ _id: req.params.id })
    .then((book) => res.json(book))
    .catch((err) => res.status(403).json("Error: " + err));
});

//PUT book by id
router.put("/:id", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json('You are not logged in')
  }

  const book = await bookModel.findById(req.params.id)
  console.log(book, req.session.user)
  if (book.user.toString() !== req.session.user._id && ! req.session.user.isAdmin) {
    return res.status(403).json('You are only allowed to edit your own book')
  }
  
  bookModel.findOneAndUpdate(
    { _id: req.params.id },
    { title: req.body.title, author: req.body.author,
        description: req.body.description, review: req.body.review }
  )
    .then(() => res.status(200).json("Book updated!"))
    .catch((err) => res.status(403).json("Error: " + err));
});

//DELETE book by id
router.delete("/:id", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json('You are not logged in')
  } 

   const book = await bookModel.findById({ _id: req.params.id})
  if (book.user.toString() !== req.session.user._id && !req.session.user.isAdmin) {
    return res.status(403).json('You are only allowed to delete your own book')
  }  

  bookModel.findByIdAndDelete({ _id: req.params.id }) //.populate("user")
    .then(() => res.status(200).json("Book Deleted"))
    .catch((err) => res.status(403).json("Error: " + err));
});

export default router