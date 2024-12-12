import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FilteredBooks.css";
import "/heart.png";
import "/cart.png";
import "/delete.png";
import FavoritesContext from "./FavoritesContext.jsx";
import ShoppingCartContext from "./ShoppingCartContext.jsx";

const FilteredBooks = ({ books }) => {
  const navigate = useNavigate();
  //define the selected book state
  const [selectedBook, setSelectedBook] = useState(null);
  const { addFavorite, removeFavorite } = useContext(FavoritesContext);
  const { addToCart } = useContext(ShoppingCartContext);

  const genre = [
    "All",
    "Bestsellers",
    "Fiction",
    "Non-fiction",
    "Business",
    "Thriller",
    "Psychology",
  ];

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
    useEffect(() => {
      addFavorite, removeFavorite;
    }, []);
  };
  const handleClickCart = (id) => {
    console.log(`Add to cart clicked for book ID: ${id}`);
    useEffect(() => {
      addToCart, removeCart;
    }, []);
  };

  // Filter books based on genre
  const filteredBooks = books.filter((book) =>
    genre === "All" ? true : book.genre === genre
  );

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
      {books.map((book, id) => (
        //set the book on click
        <div
          key={id}
          className="book-item"
          onClick={() => handleBookClick(book)}
        >
          <img src={book.cover_image} alt={book.title} />
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
          <h4>{book.author}</h4>
          <p>{book.genre}</p>
          <p>{book.description}</p>
          <p>{book.pages}</p>
          <p>{book.publish_year}</p>
          <p>{book.price}€</p>
        </div>
      ))}
    </div>
  );
};
export default FilteredBooks;
