import React, { useState } from "react";
import "../style/CreatePost.css";
import { FaGlasses } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [review, setReview] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const onDescChange = (event) => {
    setDescription(event.target.value);
  };

  const onReviewChange = (event) => {
    setReview(event.target.value);
  };

  const onSubmit = () => {
    postNewBook(title, author, description, review);
  };

  function postNewBook(title, author, description, review) {
    const data = { title, author, description, review };
    console.log(data);
    postNewData(data);
  }

  async function postNewData(data) {
    const response = await fetch("/books/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    navigate("/");
  }

  return (
    <div className="container">
      <div className="heading">
        <div>
        <Link
            to={"/feed"}
            style={{ textDecoration: "none", color: "black" }}
          >
          <MdMenuBook size={30} color="#87204D" />
          <p>Go to feed</p>
          </Link>
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
        <form className="formContainer" onSubmit={(e) => e.preventDefault()}>
          <div className="form">
            <label for="title">Title:</label>
            <input name="title" onChange={onTitleChange}></input>
          </div>
          <div className="form">
            <label for="author">Author:</label>
            <input name="author" onChange={onAuthorChange}></input>
          </div>
          <div className="form">
            <label for="description">Description:</label>
            <textarea
              className="inputDesc"
              name="description"
              onChange={onDescChange}
            ></textarea>
          </div>
          <div className="form">
            <label for="review">Your review:</label>
            <textarea
              className="inputReview"
              name="review"
              onChange={onReviewChange}
            ></textarea>
          </div>
          <button type="button" onClick={onSubmit}>
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
