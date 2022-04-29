import mongoose from "mongoose"

const bookSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
    title: String,
    author: String,
    description: String,
    review: String,
  });

export default mongoose.model("book", bookSchema)