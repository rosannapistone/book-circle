// import express from "express";
// import mongoose from "mongoose";
// import userModel from "./models/user.model.js";
// const hostname = "localhost";
// const port = 3000;

// mongoose.connect(
//   "mongodb://localhost:27017/BookCircle/users",
//   { useNewUrlParser: true },
//   (err) => {
//     if (err) {
//       console.error("Kunde inte koppla upp databasen!");
//     }
//     console.log("Databasen är kopplad!");
//   }
// );

// const app = express();

// app.use(express.json());
// app.get("/", async (req, res) => {
//   try {
//     const users = await userModel.find({});
//     res.json(users);
//   } catch (err) {
//     console.log(err);
//     res.send("Other error...");
//   }
// });

// app.post("/users", async (req, res) => {
//   try {
//     const user = new userModel({
//       username: req.body.username,
//       password: req.body.password,
//       isStudent: req.body.isStudent,
//     });
//     console.log(user);
//     await user.save();

//     res.json(user);
//   } catch (err) {
//     if (err.code == 11000) {
//       res.send("Username already exists...");
//       return;
//     }
//     res.send("Other error...");
//   }
// });

// app.put("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const user = await userModel.findByIdAndUpdate(id, req.body);

//     res.json({
//       old: user,
//       new: req.body,
//     });
//   } catch (err) {
//     if (err.code == 11000) {
//       res.send("Username already exists...");
//       return;
//     }
//     res.send("Other error...");
//   }
// });

// app.delete("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const removedUser = await userModel.findByIdAndRemove(id);
//     if (!removedUser) {
//       res.send("Id existerar ej!");
//       return;
//     }
//     res.json(removedUser);
//   } catch (err) {
//     res.send("Other error...");
//   }
// });

// app.listen(port, hostname, () => {
//   console.log(`Server is running on this port http://${hostname}:${port}`);
// });
