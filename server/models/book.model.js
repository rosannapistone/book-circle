import mongoose from "mongoose"

const bookSchema = new mongoose.Schema(
  {
    username: String,
    title: String,
    author: String,
    description: String,
    review: String,
    
    userID: [{type: mongoose.Schema.Types.ObjectId, strictPopulate: false, ref: "user"}]
     
    //username: String,
    

  });

//const Book = mongoose.model("Book", bookSchema);
//module.exports = Book;

export default mongoose.model("book", bookSchema)