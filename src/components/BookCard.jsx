import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "../styles/BookCard.css";
import heartIcon from "/heart.png";
import cartIcon from "/cart.png";

const BookCard = () => {
  const location = useLocation();
  const { title } = useParams();
  //get the book data from the navigation state
  const book = location.state?.book;

  //handle missing book
  if (!book) {
    return (
      <div>
        <h2>Book not found</h2>
        <p>No details available for {title}</p>
      </div>
    );
  }
  return (
    <div className="books-container">
      <div className="book-item">
        <img src={book.cover_image} alt={book.title} />
        <div className="buttons">
          <button
            className="favourite"
            onClick={() => console.log("Favorite clicked")}
          >
            <img src={heartIcon} className="heart" alt="favorite" />
          </button>
          <button
            className={cartIcon}
            onClick={() => console.log("Add to cart clicked")}
          >
            {" "}
            <img src="/cart.png" className="cart" alt="cart" />
          </button>
        </div>
        <h2>{book.title}</h2>
        <h4>{book.author}</h4>
      </div>
    </div>
  );
};
export default BookCard;
