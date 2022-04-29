// Lägg till express och gör router get, post, put, delete
import express from "express";
import Router from "express";
import bookModel from "../models/book.model.js";
import session from "express-session";
import cookieSession from "cookie-session";



const router = express.Router();

/* router.get("/", (req, res) => {
  try {
  const posts = bookModel.find({}).populate("user")
    res.json(posts)
    console.log("rad 14:",user)
  }
  catch (err){
    console.log(err)
    res.send("Other error")
  }
}) */

router.get("/", (req, res) => {
  bookModel.find()//.populate('user') // for att fa tag pa user pa clientsidan, hamta user.name typ
 /*  bookModel.find().populate({
    path: "userID",
    select: "username"
  }) */
   // for att fa tag pa user pa clientsidan, hamta user.name typ
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.get("/getownbooks/", async (req, res) => {
  try {
    const book = await bookModel.find()//One().populate({path: "userID",
    //select: "username",
  //})//One({user: req.params.user});
    res.json(book);
  } catch (err) {
    console.log(err);
    res.json("something is wrong")
  }
  });

/*   bookModel.find({ user: req.session.user })
  .then((books) => res.json(books))
  .catch((err) => res.status(400).json("Error: " + err))
  console.log("req.session.user:",req.session.user)
}); */


router.post("/add", async (req, res) => {
try {
  const newBook = new bookModel({
    //username: req.session.username,
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    review: req.body.review,
  });
  await newBook.save({
    //username: req.session.username,
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


  /* if (!req.session.user) {
    return res.status(400).json("You are not logged in");
  }

  const username = req.session.username; 
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const review = req.body.review;

  const newBook = new bookModel({ username, title, author, description, review });
  console.log(username)
  newBook
    .save()
    .then(() => res.json("Book posted!"))
    .catch((err) => res.status(400).json("Error: " + err)); */

  /* const userId = req.session.userId;
  const username = req.session.username;
  const title = req.body.title;
  const textContent = req.body.textContent;

  const newPost = new Post({ userId, username, title, textContent });

  newPost
    .save()
    .then(() => res.json("Post posted!"))
    .catch((err) => res.status(400).json("Error: " + err)); */
/* }); */







/* router.get("/getownbooks", (req, res) => {
  //bookModel.find({ userId: req.session.userId })
  bookModel.find({ userID: req.session.userID })
  then((books) => res.json(books))
  .catch((err) => res.status(400).json("Error: " + err))
}); */



  /*  // for att fa tag pa user pa clientsidan, hamta user.name typ
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
}); */

/* router.get("/getownposts", async (req, res) => {
  try {
    const posts = await bookModel.find({user: req.session.user._id}).populate("user");
    res.json(posts)
  }
  catch(err) {
    console.log(err)
    res.send('other error')
  }
} ) */

/* router.get("/getownbooks", (req, res) => {
  bookModel.find({ userID: req.session.userID }).populate("user")/* .populate({
    path: "userID",
    select: "username",
  }) */  //({ userID: req.session.userID })
 /* .then((books) => res.json(books))
  .catch((err) => res.status(400).json("Error: " + err))
}); */
//console.log("rad 28:", req.session.userID, userID)

/* router.post("/add", (req, res) => {
    if (!req.session.userID) {
    console.log('rad 31:', req.session.userID)//return res.status(400).json("You are not logged in");
  }   

  //const username = req.session.username; 
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const review = req.body.review;

  const newBook = new bookModel({ /* username, *//* title, author, description, review });

  newBook
    .save()
    .then(() => res.json("Book posted!"))
    .catch((err) => res.status(400).json("Error: " + err));
}); */

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

export default router