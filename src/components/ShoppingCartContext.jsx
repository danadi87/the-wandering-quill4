import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/apiConfig";

//to manage the shopping cart state and provides functions to interact with the cart
//create Context object to be able to share data globally and avoid passing props
const ShoppingCartContext = createContext();

//create a Provider component and a wrapper
export const ShoppingCartProviderWrapper = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    axios
      .post(`${API_URL}/cart`, book)
      .then((response) => {
        setCart((prevCart) => [...prevCart, response.data]);
      })
      .catch((error) => console.log(error));
  };
  const removeCart = (bookId) => {
    axios
      .delete(`${API_URL}/cart/${bookId}`)
      .then((response) => {
        console.log(response.data);
        const newCart = cart.filter((book) => {
          if (bookId != book.id) return true;
        });
        setCart(newCart);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    axios
      .get(`${API_URL}/cart`)
      .then((response) => setCart(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
