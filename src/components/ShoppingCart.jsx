import React, { useContext } from "react";
import ShoppingCartContext from "./ShoppingCartContext.jsx";

//page to display books in the cart
const ShoppingCart = () => {
  const { cart } = useContext(ShoppingCartContext);
  return (
    <div className="cart">
      <h2>Shopping cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="list">
          {cart.map((book) => {
            <div className="cartItem" key={book.id}>
              <img src={book.cover_image} alt={book.title} />
              <h2>{book.title}</h2>
              <h4>{book.author}</h4>
              <p>{book.genre}</p>
              <p>{book.description}</p>
              <p>{book.pages}</p>
              <p>{book.publish_year}</p>
            </div>;
          })}
        </div>
      )}
    </div>
  );
};
export default ShoppingCart;
