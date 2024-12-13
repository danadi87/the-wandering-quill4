import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import heartIcon from "/heart.png";
import cartIcon from "/cart.png";
import { API_URL } from "../config/apiConfig";
import FavoritesContext from "./FavoritesContext.jsx";
import ShoppingCartContext from "./ShoppingCartContext.jsx";
import "../styles/BookDetails.css";

const BookDetails = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();
  const { addFavorite } = useContext(FavoritesContext);
  const { addToCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    if (id) {
      getBook();
    }
  }, [id]);

  const getBook = () => {
    axios
      .get(`${API_URL}/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="book-details">
      <img src={book.cover_image} alt={book.title} className="cover-image-details" />
      <h1>{book.title}</h1>
      <h3 className="author">by {book.author}</h3>
      <div className="buttons">
        <Link to={`/favorites/`}>
          <button
            className="favourite-details"
            onClick={() => addFavorite(book)}
          >
            <img src={heartIcon} className="heart" alt="favorite" />
          </button>
        </Link>
        <Link to={`/shopping_cart/`}>
          <button
            className="cart-details"
            onClick={() => {
              addToCart(book);
            }}
          >
            {" "}
            <img src={cartIcon} className="cart" alt="cart" />
          </button>
        </Link>
        <Link to={`/updateBook/${id}`}>
          <button className="updateBook">Edit book</button>
        </Link>
      </div>

      <p>{book.description}</p>
      <div className="details">
        <p className="paragraph">
          <strong>Genre: </strong>
          {book.genre}
        </p>
        <p className="paragraph">
          <strong>Pages: </strong>
          {book.pages}
        </p>
        <p className="paragraph">
          <strong>Publish Year: </strong>
          {book.publish_year}
        </p>
        <p className="paragraph">
          <strong>Price: </strong>
          {book.price}€
        </p>
      </div>
    </div>
  );
};
export default BookDetails;
