import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/FilteredBooks.css";
import "/heart.png";
import "/cart.png";
import "/delete.png";

const FilteredBooks = ({ books, searchTerm }) => {
  const navigate = useNavigate();
  //define the selected book state
  const [selectedBook, setSelectedBook] = useState(null);
  const { genre } = useParams();

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

  //set the clicked book as selected
  const handleBookClick = (book) => {
    setSelectedBook(book);
    //format the title for the path by replacing spaces with hyphens for URLs
    const title = book.title.toLowerCase().replace(/\s+/g, "-");
    //passing the book data via state
    navigate(`/book/${title}`, { state: { book } });
  };
  //reset selected book to go back to the list
  const handleBackToList = () => {
    setSelectedBook(null);
  };
  const handleClickFavorite = (id) => {
    console.log(`Favorite clicked for book ID: ${id}`);
  };
  const handleClickCart = (id) => {
    console.log(`Add to cart clicked for book ID: ${id}`);
  };

  if (filteredBooks.length === 0) {
    return <p>No books found for this genre.</p>;
  }

  if (selectedBook) {
    //if a book is selected, render the BookCard component
    return (
      <div className="book-details">
        <button
          type="button"
          className="back-button"
          onClick={handleBackToList}
        >
          Back to list
        </button>
        <BookCard book={selectedBook} />
      </div>
    );
  }
  return (
    <div className="books-container">
      {filteredBooks.map((book, id) => (
        //set the book on click
        <div
          key={id}
          className="book-item"
          onClick={() => handleBookClick(book)}
        >
          <img src={book.cover_image} alt={book.title} className="cover-image" />
          <div className="buttons">
            <button
              type="button"
              className="favourite"
              onClick={(e) => {
                handleClickFavorite;
              }}
            >
              <img src="/heart.png" className="heart" />
            </button>
            <button
              type="button"
              className="/cart.png"
              onClick={(e) => {
                handleClickCart;
              }}
            >
              {" "}
              <img src="/cart.png" className="cart" alt="cart" />
            </button>
          </div>
          <h2>{book.title}</h2>
          <h4>by {book.author}</h4>
          <p className="genre">{book.genre}</p>
          <p>{book.short_description}</p>
          <p>
            <strong>Pages: </strong>
            {book.pages}
          </p>
          <p>
            <strong>Publishing year: </strong>
            {book.publish_year}
          </p>
          <p>
            <strong>Price: </strong>
            {book.price}€
          </p>
        </div>
      ))}
    </div>
  );
};
export default FilteredBooks;
