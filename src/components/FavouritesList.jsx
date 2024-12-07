import React, { useContext } from "react";
import FavoritesContext from "./FavoritesContext.jsx";
import ShoppingCartContext from "./ShoppingCartContext.jsx";

const FavouritesList = () => {
  const { favorites, removeFavorite, addToFavorites } =
    useContext(FavoritesContext);
  const { addToCart, isInCart } = useContext(ShoppingCartContext);

  return (
    <div className="favorites">
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="list">
          {favorites.map((book) => {
            return (
              <div className="favoriteItemCard" key={book.id}>
                <img src={book.cover_image} alt={book.title} />
                <h2>{book.title}</h2>
                <h4>{book.author}</h4>
                <p>{book.genre}</p>
                <p>{book.description}</p>
                <p>{book.pages}</p>
                <p>{book.publish_year}</p>
                <div className="buttons">
                  {/*add to cart button or disable button if already added to cart & displays "Added to cart" if the book is in the cart*/}
                  <button
                    onClick={() => addToCart(book.id)}
                    // disabled={isInCart(book.id)}
                  >
                    {/* {isInCart(book.id) ? "Added to Cart" : "Add to Cart"}*/}
                  </button>
                  <button onClick={() => removeFavorite(book.id)}>
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
