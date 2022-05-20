import { useEffect, useState,React } from "react";
import "../style/OfflineFeed.css";

export default function OfflineFeed() {
  const [bookDataOffline, setBookDataOffline] = useState([]);

  async function getAllBooks() {
    const response = await fetch("/books/offline", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    setBookDataOffline(result);
    console.log(bookDataOffline) 
  }

  useEffect(() => {
    getAllBooks();
},[]); 

  return (
    <div className="container">
      <div className="posts">
        {bookDataOffline.map((item) => {
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
                  Users review 
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
