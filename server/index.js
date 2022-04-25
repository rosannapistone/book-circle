import "./connect.js"
import express from "express"
import cors from "cors"
import booksRouter from "./routes/books.js"

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: ["http://localhost:3001"] }));
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