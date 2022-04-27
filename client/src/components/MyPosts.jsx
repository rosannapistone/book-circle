import React from "react";
import "./MyPosts.css";
import { FaGlasses } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { MdMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";

function MyPosts() {
  const [bookData, setBookData] = useState([]);

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

  function onSubmit(item) {
    editBook(title, author, description, review, item._id);
    console.log(item._id);
  }

  function editBook(title, author, description, review, _id) {
    const data = { title, author, description, review };
    postEditedData(data, _id);
  }

  //PUT
  async function postEditedData(data, _id) {
    const response = await fetch(`/books/${_id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    getAllBooks();
  }

  async function getAllBooks() {
    const response = await fetch("/books", {
      method: "GET",
      //body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setBookData(result);
  }

  useEffect(() => {
    getAllBooks();
  }, [setBookData]);

  function deleteBook(book) {
    bookData.splice(book, 1);
    deleteData(book._id);
  }

  //DELETE
  async function deleteData(_id) {
    const response = await fetch(`/books/${_id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    getAllBooks();
  }

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
          <Link
            to={"/createpost"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <MdPostAdd size={30} color="#87204D" />
            <p>Create new post</p>
          </Link>
        </div>
      </div>

      <div className="myPosts">
        {bookData.map((item) => {
          return (
            <div key={item.id} className="postContainer">
              <div className="edit">
                <FaTrashAlt
                  onClick={() => {
                    deleteBook(item);
                  }}
                />
                <Popup
                  trigger={
                    <a>
                      <MdMode />
                    </a>
                  }
                  position="bottom right"
                >
                  <div className="popup-div">
                    <form
                      className="formContainer"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="form">
                        <label for="title">Title:</label>
                        <input
                          name="title"
                          placeholder={item.title}
                          onChange={onTitleChange}
                        ></input>
                      </div>
                      <div className="form">
                        <label for="author">Author:</label>
                        <input
                          name="author"
                          placeholder={item.author}
                          onChange={onAuthorChange}
                        ></input>
                      </div>
                      <div className="form">
                        <label for="description">Description:</label>
                        <textarea
                          className="inputDesc"
                          name="description"
                          placeholder={item.description}
                          onChange={onDescChange}
                        ></textarea>
                      </div>
                      <div className="form">
                        <label for="review">Your review:</label>
                        <textarea
                          className="inputReview"
                          name="review"
                          placeholder={item.review}
                          onChange={onReviewChange}
                        ></textarea>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          onSubmit(item);
                        }}
                      >
                        Save
                      </button>
                    </form>
                  </div>
                </Popup>
              </div>
              <div className="textContainer">
                <p className="title">{item.title}</p>
                <p className="author">{item.author}</p>
                <p>
                  Description
                  <br></br>
                  {item.description}
                </p>
                <p>
                  Username's review
                  <br></br>
                  {item.review}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyPosts;
