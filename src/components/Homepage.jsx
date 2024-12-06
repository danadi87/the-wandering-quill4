import React from "react";
import "../styles/Homepage.css";
import BookCard from "./BookCard.jsx";

const Homepage = () => {
  return (
    <div className="main-container">
      <div className="card">
        <article>
          <BookCard />
        </article>
      </div>
    </div>
  );
};
export default Homepage;
