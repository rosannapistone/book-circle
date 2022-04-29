import { useEffect, useState } from "react";
import "../style/OfflineFeed.css";

export default function OfflineFeed() {
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
    console.log(bookData);
  }

  useEffect(
    () => {
      getAllBooks();
    } /* , [] */
  );

  return (
    <div className="container">
      <div className="posts">
        {bookData.map((item) => {
          return (
            <div key={item.id} className="postContainer">
              <div className="textContainer">
                <p className="title">{item.title}</p>
                <p className="author">{item.author}</p>
                <p>
                  Description
                  <br></br>
                  {item.description}
                </p>
                <p>
                  Username's review {item.user}
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
