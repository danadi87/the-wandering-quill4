import React from "react";
import { useParams } from "react-router-dom";
import "../styles/BookCard.css";

const BookCard = ({ book, deleteBook, addToFavorites }) => {
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
        <img src={book.cover_image} alt={book.title} />
        <h2>{book.title}</h2>
        <h4>{book.author}</h4>
        <p>{book.short_description}</p>
      </div>
    </div>
  );
};
export default BookCard;
