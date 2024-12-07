import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import heartIcon from "/heart.png";
import cartIcon from "/cart.png";
import { API_URL } from "../config/apiConfig";
import RequestABook from "./RequestABook";

const BookDetails = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();

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
  const updateBook = (book) => {
    axios
      .put(`${API_URL}/books/${id}`, {
        title: "",
        author: "",
        genre: "",
        description: "",
        pages: "",
        cover_image: "",
        publish_year: "",
        price: "",
      })
      .then((response) => setBook(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <img src={book.cover_image} alt={book.title} />
      <h1>{book.title}</h1>
      <div className="buttons">
        <button
          className="favourite"
         
        >
          <img src={heartIcon} className="heart" alt="favorite" />
        </button>
        <button
          className={cartIcon}
          onClick={() => {
            updateBook(book.id);
            console.log("Add to cart clicked");
          }}
        >
          {" "}
          <img src="/cart.png" className="cart" alt="cart" />
        </button>
        <Link to="/updateABook">
          <button className="updateBook">Edit book</button>
        </Link>
        ;
      </div>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>{book.genre}</p>
      <p>{book.pages}</p>
      <p>{book.publish_year}</p>
      <p>{book.price}€</p>
    </div>
  );
};
export default BookDetails;
