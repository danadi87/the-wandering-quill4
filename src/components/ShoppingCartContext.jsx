import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//to manage the shopping cart state and provides functions to interact with the cart
//create Context object to be able to share data globally and avoid passing props
const ShoppingCartContext = createContext();

//create a Provider component and a wrapper
export const ShoppingCartProviderWrapper = ({ children }) => {
  const [cart, setCart] = useState([]);
  const API_URL = "http://localhost:5005/";

  const addToCart = () => {
    axios
      .post(`${API_URL}/cart`)
      .then((response) => setCart(response.data))
      .catch((error) => console.log(error));
  };
  const removeCart = () => {
    axios
      .delete(`${API_URL}/cart`)
      .then((response) => setCart(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    addToCart, removeCart;
  }, []);
  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
