import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//create Context object to be able to share data globally and avoid passing props
const FavoritesContext = createContext();

//create a Provider component and a wrapper
export const FavoritesProviderWrapper = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const API_URL = "http://localhost:5005/";

  const addFavorite = (book) => {
    axios
      .post(`${API_URL}/favorites`, {
        title: "",
        author: "",
        genre: "",
        description: "",
        pages: "",
        cover_image: "",
        publish_year: "",
        price: "",
      })
      .then((response) => setFavorites(response.data))
      .catch((error) => console.log(error));
  };

  const removeFavorite = () => {
    axios
      .delete(`${API_URL}/favorites`)
      .then((response) => setFavorites(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    addFavorite, removeFavorite;
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
