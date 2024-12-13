import React from "react";
import { useParams } from "react-router-dom";
import "../styles/BookCard.css";

const BookCard = ({ book }) => {
  const { title } = useParams();

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
        <img src={book.cover_image} alt={book.title} className="cover-image-card" />
        <h2>{book.title}</h2>
        <h4>by {book.author}</h4>
        <p className="short-description">{book.short_description}</p>
        <p className="price">{book.price}€</p>
      </div>
    </div>
  );
};
export default BookCard;
