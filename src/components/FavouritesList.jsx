import React, { useContext } from "react";
import FavoritesContext from "./FavoritesContext.jsx";
import ShoppingCartContext from "./ShoppingCartContext.jsx";
import "../styles/FavoriteList.css";

const FavouritesList = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  const { addToCart } = useContext(ShoppingCartContext);

  return (
    <div className="favorites">
      <h1 className="title-cart"> My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="list">
          {favorites.map((book) => {
            return (
              <div className="favoriteItemCard" key={book.id}>
                <img
                  src={book.cover_image}
                  alt={book.title}
                  className="image-favorites"
                />
                <p>
                  <strong>{book.title}</strong>
                </p>
                <p>by {book.author}</p>
                <strong>{book.price}€</strong>
                <div className="buttons-favorites-list">
                  <button
                    className="favorites-list"
                    onClick={() => addToCart(book)}
                  >
                    Add to cart
                  </button>
                  <button
                    className="favorites-list"
                    onClick={() => removeFavorite(book.id)}
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
export default FavouritesList;
