import React from "react";
import "./MyPosts.css";
import { FaGlasses } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { MdMode } from "react-icons/md";
import { Link } from "react-router-dom";



function MyPosts() {
  return (
    <div className="container">
      <div className="heading">
        <div>
          <MdMenuBook size={30} color="#87204D" />
          <p>Go to feed</p>
        </div>
        <div>
          <FaGlasses size={40} color="#87204D" />
          <h3>My posts</h3>
        </div>
        <div>
        <Link to={'/createpost'} style={{ textDecoration: 'none', color: "black" }}>
          <MdPostAdd size={30} color="#87204D" />
          <p>Create new post</p>
        </Link>
        </div>
      </div>

      <div className="myPosts">
        <div className="postContainer">
           <div className="edit">
               <FaTrashAlt/>
               <MdMode />
               </div> 
          <div className="textContainer">     
          <p className="title">Harry Potter and the Goblet of Fire by J.K. Rowling</p>
          <p>
            Description
            <br></br>
            This is the fourth novel in the Harry Potter series. It follows
            Harry Potter, a wizard in his fourth year at Hogwarts School of
            Witchcraft and Wizardry, and the mystery surrounding the entry of
            Harry's name into the Triwizard Tournament, in which he is forced to
            compete.
          </p>
          <p>
            User's review
            <br></br>
            The book is imaginative, funny, frightening and, of course, magical! 
            What makes them so successful is that they combine action, fantasy and friendship.
          </p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default MyPosts;
