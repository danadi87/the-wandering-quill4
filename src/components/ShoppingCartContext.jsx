import React, { createContext, useState, useEffect } from "react";

//to manage the shopping cart state and provides functions to interact with the cart
//create Context object to be able to share data globally and avoid passing props
const ShoppingCartContext = createContext();

//create a Provider component and a wrapper
export const ShoppingCartProviderWrapper = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };
  const removeCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((book) => book.id !== bookId));
  };
  useEffect(() => {
    fetch("http://localhost:3001/cart")
      .then((response) => response.json())
      .then((data) => setCart(data))
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);
  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
