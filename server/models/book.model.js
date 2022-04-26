import mongoose from "mongoose"

const bookSchema = new mongoose.Schema(
  {
   /*  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }, */
    username: String,
    title: String,
    author: String,
    description: String,
    review: String

  });

//const Book = mongoose.model("Book", bookSchema);
//module.exports = Book;

export default mongoose.model("book", bookSchema)