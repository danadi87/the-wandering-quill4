import React, { useContext } from "react";
import ShoppingCartContext from "./ShoppingCartContext.jsx";
import FavoritesContext from "./FavoritesContext.jsx";
import "../styles/ShoppingCart.css";

//page to display books in the cart
const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart } = useContext(ShoppingCartContext);
  const { addFavorite } = useContext(FavoritesContext);
  return (
    <div className="cart">
      <h1 className="title-cart">Shopping cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="list">
          {cart.map((book) => {
            return (
              <div className="cartItem" key={book.id}>
                <img
                  src={book.cover_image}
                  alt={book.title}
                  className="image-favorites"
                />
                <p>
                  <strong>{book.title}</strong>
                </p>
                <p>by {book.author}</p>
                <p>
                  <strong>{book.price}€</strong>
                </p>
                <div className="buttons-favorites-list">
                  <button
                    className="favorites-list"
                    onClick={() => addFavorite(book.id)}
                  >
                    Add to Favorites
                  </button>
                  <button
                    className="favorites-list"
                    onClick={() => removeFromCart(book.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default ShoppingCart;
