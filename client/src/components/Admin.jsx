import { useState } from "react";
import { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdMode } from "react-icons/md";
import Popup from "reactjs-popup";

function Admin() {
  const [allUsers, setAllUsers] = useState([]);
  const [username, setUsername] = useState("");
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

  function onSubmitEditBook(book) {
    editBook(title, author, description, review, book._id);
    console.log(book._id);
  }

  function editBook(title, author, description, review, _id) {
    const data = { title, author, description, review };
    postEditedBook(data, _id);
  }

  //PUT edited post
  async function postEditedBook(data, _id) {
    const response = await fetch(`/books/${_id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    getAllBooks();
  }

  //DELETE book
  function deleteBook(book) {
    bookData.splice(book, 1);
    deleteBookData(book._id);
  }

  //DELETE book from database
  async function deleteBookData(_id) {
    const response = await fetch(`/books/${_id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
    getAllBooks();
  }

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  function onSubmit(user) {
    editUser(username, user._id);
    console.log(user._id);
  }

  function editUser(username, _id) {
    const data = { username };
    postEditedData(data, _id);
  }

  async function getAllUsers() {
    const response = await fetch("/users/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setAllUsers(result);
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  //PUT edit user
  async function postEditedData(data, _id) {
    const response = await fetch(`/users/${_id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    getAllUsers();
  }

  //DELETE user
  function deleteUser(user) {
    allUsers.splice(user, 1);
    deleteData(user._id);
  }

  //DELETE user from database
  async function deleteData(_id) {
    const response = await fetch(`/users/${_id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
    getAllUsers();
  }

  async function getAllBooks() {
    const response = await fetch("/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setBookData(result);
  }

  useEffect(() => {
    getAllBooks();
  }, []);


  return (
    <div>
      <div style={{ fontSize: "2rem" }}>Admin</div>
      {allUsers.map((user) => {
          if (user.username === 'admin') {
              user.role = 'Admin'
          } else {user.role = 'User'}console.log(user.role)
        return (
          <div key={user.id} style={{ margin: "4rem" }}>
            <div
              style={{
                backgroundColor: "#ede8ea",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
                flexWrap: "wrap"
              }}
            >
              <div>
                <p>Username: {user.username}</p>
                <p style={{fontSize: ".5rem"}}>Id: {user._id}</p>
                <p>Role: {user.role}</p>
                
              </div>
              <div className="edit">
                <FaTrashAlt
                  onClick={() => {
                    deleteUser(user);
                  }}
                />
                <Popup
                  trigger={
                    <a>
                      <MdMode />
                    </a>
                  }
                  position="bottom center"
                  
                >
                  <div className="popup-div" style={{width: "80%"}}>
                    <form
                      className="formContainer" 
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="form">
                        <label for="username">Username:</label>
                        <input
                          name="username"
                          placeholder={user.username}
                          onChange={onUsernameChange}
                        ></input>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          onSubmit(user);
                        }}
                      >
                        Save
                      </button>
                    </form>
                  </div>
                </Popup>
              </div>
            </div>
            {bookData.map((book) => {
              if (book.user._id === user._id)
                return (
                  <div
                  key={book.id}
                    style={{
                      border: "solid black 2px",
                      padding: "1rem",
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap"
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexWrap: "wrap"}}>
                    <p>Post:</p>
                      <p>Title: {book.title}</p>
                      <p>Author: {book.author}</p>
                      <p>Description: {book.description}</p>
                      <p>Review: {book.review}</p>
                    </div>
                    <div className="edit">
                      <FaTrashAlt
                        onClick={() => {
                          deleteBook(book);
                        }}
                      />
                      <Popup
                        trigger={
                          <a>
                            <MdMode />
                          </a>
                        }
                        position="bottom center"
                      >
                        <div className="popup-div" style={{width: "80%"}}>
                          <form
                            className="formContainer"
                            onSubmit={(e) => e.preventDefault()}
                          >
                            <div className="form">
                              <label for="title">Title:</label>
                              <input
                                name="title"
                                placeholder={book.title}
                                onChange={onTitleChange}
                              ></input>
                            </div>
                            <div className="form">
                              <label for="author">Author:</label>
                              <input
                                name="author"
                                placeholder={book.author}
                                onChange={onAuthorChange}
                              ></input>
                            </div>
                            <div className="form">
                              <label for="description">Description:</label>
                              <textarea
                                className="inputDesc"
                                name="description"
                                placeholder={book.description}
                                onChange={onDescChange}
                              ></textarea>
                            </div>
                            <div className="form">
                              <label for="review">Review:</label>
                              <textarea
                                className="inputReview"
                                name="review"
                                placeholder={book.review}
                                onChange={onReviewChange}
                              ></textarea>
                            </div>

                            <button
                              type="button"
                              onClick={() => {
                                onSubmitEditBook(book);
                              }}
                            >
                              Save
                            </button>
                          </form>
                        </div>
                      </Popup>
                    </div>
                  </div>
                );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Admin;
