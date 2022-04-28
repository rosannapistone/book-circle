import mongoose from "mongoose";
import userModel from "./models/user.model.js";
import "./connect.js";
import express from "express";
import cors from "cors";
import booksRouter from "./routes/books.js";
import usersRouter from "./routes/user.js";
import cookieSession from "cookie-session";

// mongoose.connect(
//   "mongodb://localhost/bookCircles",
//   { useNewUrlParser: true },
//   (err) => {
//     if (err) {
//       console.error("Kunde inte koppla upp databasen!");
//     }

//     console.log("Databasen är kopplad!");
//   }
// );

const app = express();
app.use(express.json());
app.use("/", express.static("public"));

app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));

app.use(
  cookieSession({
    name: "session",
    secret: "aVeryS3cr3tk3y",
    maxAge: 1000 * 100,
    sameSite: "strict",
    httpOnly: true,
    secure: false,
  })
); 

// Routes for users
app.use("/users", usersRouter);
// Route for books
app.use("/books", booksRouter);

// Server running
app.listen(3001, () => console.log("Listening at 3001"));
