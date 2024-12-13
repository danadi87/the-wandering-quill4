import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/FilteredBooks.css";
import "/heart.png";
import "/cart.png";
import "/delete.png";
import BookCard from "./BookCard.jsx";
import { Link } from "react-router-dom";

const FilteredBooks = ({ books, searchTerm }) => {
  const navigate = useNavigate();
  //define the selected book state
  const [selectedBook, setSelectedBook] = useState(null);
  const { genre } = useParams();
  const [favorites, setFavorites] = useState([]);

  const [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    const booksFiltered = books.filter((oneBook) => {
      if (searchTerm) {
        // If searchTerm is active, only filter by searchTerm
        return oneBook.title.toLowerCase().includes(searchTerm.toLowerCase());
      }
      // Otherwise, filter by genre
      return genre === "All" || oneBook.genre === genre;
    });
    setFilteredBooks(booksFiltered);
  }, [genre, searchTerm, books]);

  function deleteBook(id) {
    console.log(`Deleting book with is ${id}`);
    //filter out the books with the specified id from the BooksList array
    const filteredBooks = books.filter((book) => book.id !== id);
    //update the state with the new filtered array
    setBooks(filteredBooks);
  }
  function addToFavorites(id) {
    console.log(`Adding book with id ${id} to favorites`);
    setFavorites((currentFavorites) =>
      currentFavorites.includes(id)
        ? currentFavorites.filter((favId) => favId !== id)
        : [...currentFavorites, id]
    );
    let favoriteList;

    if (filteredBooks.length === 0) {
      return <p>No books found for this genre.</p>;
    }

    return (
      <div className="book-details">
        <button
          type="button"
          className="back-button"
          onClick={handleBackToList}
        >
          Back to list
        </button>
      </div>
    );
  }
  return (
    <div className="books-container">
      {filteredBooks.map((book, id) => (
        <Link to={`/book/${book.id}`} key={book.id}>
          <BookCard
            book={book}
            deleteBook={deleteBook}
            addToFavorites={addToFavorites}
          />
        </Link>
      ))}
    </div>
  );
};
export default FilteredBooks;
