import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/apiConfig";

//create Context object to be able to share data globally and avoid passing props
const FavoritesContext = createContext();

//create a Provider component and a wrapper
export const FavoritesProviderWrapper = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (book) => {
    axios
      .post(`${API_URL}/favorites`, book)
      .then((response) => {
        setFavorites((prevFavorites) => [...prevFavorites, response.data]);
      })
      .catch((error) => console.log(error));
  };

  const removeFavorite = (bookId) => {
    axios
      .delete(`${API_URL}/favorites/${bookId}`)
      .then((response) => {
        console.log(response.data);
        const newFavorites = favorites.filter((book) => {
          if (bookId != book.id) return true;
        });
        setFavorites(newFavorites);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/favorites`)
      .then((response) => setFavorites(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContext;
