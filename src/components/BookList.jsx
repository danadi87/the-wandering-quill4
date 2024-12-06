import { useState } from "react";
import BooksList from "../assets/BooksList.json";
import BookCard from "./BookCard.jsx";
import FavouritesList from "./FavouritesList.jsx";
import axios from "axios";

const Booklist = () => {
  const API_URL = "http://localhost:5005/";
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const getAllBooks = () => {
    axios
      .get(`${API_URL}/books`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  };
  //handle the favourite toggle
  const handleClickFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);
  };

  //handle the cart toggle
  const handleClickCart = (id) => {
    const updatedCart = books.includes(id)
      ? books.filter((cartId) => cartId !== id)
      : [...books, id];
    setBooks(updatedCart);
  };
  function deleteBook(id) {
    console.log(`Deleting book with is ${id}`);
    //filter out the books with the specified id from the BooksList array
    const filteredBooks = books.filter((book) => book.is !== id);
    //update the state with the new filtered array
    setBooks(filteredBooks);
  }
  function addToFavorites(id) {
    console.log(`Adding book with id ${id} to favorites`);
    //filter out the list with the specified  id from the books array
    let favoriteList;

    const filteredList = BooksList.filter((book) => {
      //store the id in the favoriteList
      if (book.id === id) {
        favoriteList = book;
        return false;
      }
      return true;
    });
    //update the state with the new filtered array
    setBooks(filteredList);
    //add the favoriteList to the favorite array
    setFavorites([favorites, ...favorites]);
  }
  return (
    <div className="BookList">
      <div className="list">
        {books &&
          books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              deleteBook={deleteBook}
              addToFavorites={addToFavorites}
            />
          ))}
      </div>
      <FavouritesList favorites={favorites} />
    </div>
  );
};
export default Booklist;
