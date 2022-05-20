import { useEffect, useState } from "react";
import "../style/Feed.css";
import { Link } from "react-router-dom";
import { FaGlasses } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";

export default function Feed() {
  const [bookData, setBookData] = useState([]);

  async function getAllBooks() {
    const response = await fetch("/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setBookData(result);
    console.log(result);
  }

  useEffect(() => {
    getAllBooks();
},[]); 

  return (
    <div className="container">
       <div className="heading">
        <div>
        <Link
            to={"/myposts"}
            style={{ textDecoration: "none", color: "black" }}
          >
          <FaGlasses size={30} color="#87204D" />
          <p>My posts</p>
          </Link>
        </div>
        <div>
          <MdMenuBook size={40} color="#87204D" />
          <h3>Feed</h3>
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
      <div className="posts">
        {bookData.map((item) => {
          console.log(item._id)
          return (
            <div key={item._id} className="postContainer">
              <div className="textContainer">
                <p className="title">{item.title}</p>
                <p className="author">{item.author}</p>
                <p>
                  Description
                  <br></br>
                  {item.description}
                </p>
                <p>
                  <b style={{fontWeight: "bold",color: "#87204d" }}>{item.user?.username}</b>'s review
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
