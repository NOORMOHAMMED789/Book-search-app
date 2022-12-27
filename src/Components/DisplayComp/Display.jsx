import React from "react";
import "./Display.css";

const Display = (props) => {
  console.log(props.books);
  return (
    <>
      {props.books.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
        return (
          <>
            <div className="display_heading">
              <img
                src={thumbnail}
                alt=""
                width="100%"
                height="100%"
                className="images"
              />
              <div className="lower">
                <h3 className="title" key={index}>
                  {item.volumeInfo.title}
                </h3>
                <p className="title" key={Math.random() * 10}>
                  {item.volumeInfo.averageRating}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Display;
