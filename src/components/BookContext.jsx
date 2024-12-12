import React, { createContext, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isFilteredView, setFilteredView] = useState(false);

  const filterBooks = (BooksList, genre) => {
    if (genre === "All") {
      setFilteredBooks(BooksList);
    } else {
      const filtered = BooksList.filter((book) => book.genre === genre);
      setFilteredBooks(filtered);
    }
    setFilteredView(true);
  };

  return (
    <BookContext.Provider
      value={{ filteredBooks, isFilteredView, filterBooks }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
