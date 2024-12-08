import { useState, useEffect } from "react";
import BookCard from "./BookCard.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config/apiConfig";

const Booklist = () => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = () => {
    axios
      .get(`${API_URL}/books`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  };
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

    const filteredList = getAllBooks.filter((book) => {
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
            <Link to={`/book/${book.id}`} key={book.id}>
              <BookCard
                book={book}
                deleteBook={deleteBook}
                addToFavorites={addToFavorites}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Booklist;
