import mongoose from "mongoose"

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    description: String,
    review: String,

    /* username: {
      type: String
    }, */
    loggedInUser: {
      username: String
      /* type: mongoose.Schema.Types.ObjectId,
      ref: "user" */
    }

   /*  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    } */
    
    //user: {type: mongoose.Schema.Types.ObjectId, strictPopulate: false, ref: "user", required: true}
     
    //username: String,
    

  });

//const Book = mongoose.model("Book", bookSchema);
//module.exports = Book;

export default mongoose.model("book", bookSchema)