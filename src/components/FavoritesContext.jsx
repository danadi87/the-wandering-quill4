import React, { createContext, useState, useEffect } from "react";

//create Context object to be able to share data globally and avoid passing props
const FavoritesContext = createContext();

//create a Provider component and a wrapper
export const FavoritesProviderWrapper = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };
  const removeFavorite = (bookId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((book) => book.id !== bookId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContext;
