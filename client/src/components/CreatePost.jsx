import React from "react";
import "./CreatePost.css";
import { FaGlasses } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";

function CreatePost() {
  return (
    <div className="container">
      <div className="heading">
        <div>
          <MdMenuBook size={30} color="#87204D" />
          <p>Go to feed</p>
        </div>
        <div>
          <MdPostAdd size={40} color="#87204D" />
          <h3>Create new post</h3>
        </div>
        <div>
          <Link
            to={"/myposts"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <FaGlasses size={30} color="#87204D" />
            <p>My posts</p>
          </Link>
        </div>
      </div>

      <div>
        <form className="formContainer">
          <div className="form">
            <label for="title">Title:</label>
            <input name="title"></input>
          </div>
          <div className="form">
            <label for="author">Author:</label>
            <input name="author"></input>
          </div>
          <div className="form">
            <label for="description">Description:</label>
            <textarea className="inputDesc" name="description"></textarea>
          </div>
          <div className="form">
            <label for="review">Your review:</label>
            <textarea className="inputReview" name="review"></textarea>
          </div>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
