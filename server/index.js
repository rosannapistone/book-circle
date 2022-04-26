import mongoose from "mongoose";
import userModel from "./models/user.model.js";
import "./connect.js";
import express from "express";
import cors from "cors";
import booksRouter from "./routes/books.js";
import usersRouter from "./routes/user.js";
import cookieSession from "cookie-session";
// import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
// app.use(cookieParser());
app.use("/", express.static("public"));

app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));
app.use(express.static("public"));
app.use(
  cookieSession({
    name: "session",
    keys: "aVeryS3cr3tk3y",
    maxAge: 1000 * 3600, //60min
    sameSite: "strict",
    httpOnly: true,
    secure: false,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/login", async (req, res) => {
  // Check if username and password is correct
  const user = users.find((user) => user.name === req.body.name);
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(401).send("Wrong password or username");
  }

  // Check if user aleady is logged in
  if (req.session.id) {
    return res.send("Already logged in");
  }

  // Save info about the user to the session (a cookie stored on the clinet)
  req.session.id = uuid.v4();
  req.session.username = user.name;
  req.session.loginDate = new Date();
  req.session.role = undefined; // User could have a role (access privileges)
  res.send("Successful login");
});

app.delete("/logout", (req, res) => {
  if (!req.session.id) {
    return res.status(400).send("Cannot logout when you are not logged in");
  }
  req.session = null;
  res.send("Your are now logged out");
});

// Routes for users
app.use("/users", usersRouter);

// Route for books
app.use("/books", booksRouter);

// Server running
app.listen(3001, () => console.log("Listening at 3001"));
