import React, { useState } from "react";
import "./Book.css";
import wooden from "./wooden-bg.jpg";
import Display from "../DisplayComp/Display";

const Book = () => {
  const [word, setWord] = useState("");
  const [array, setArray] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=%7B${word}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setArray(res.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const changeHandler = (e) => {
    setWord(e.target.value);
  };
  return (
    <div>
      <img
        src={wooden}
        alt="wooden"
        className="wooden-img"
        width="100%"
        height="10%"
      />
      <h1 className="main_heading">BOOK SEARCH</h1>
      <input
        type="text"
        placeholder="search for a book"
        className="main_input"
        value={word}
        onChange={changeHandler}
        onKeyDown={searchBook}
      />
      {<Display books={array} />}
    </div>
  );
};

export default Book;
