import React, { useEffect } from "react";
import "../styles/Homepage.css";
import Booklist from "./BookList.jsx";
import { API_URL } from "../config/apiConfig";

const Homepage = () => {
  useEffect(() => {
    const getAllBooks = () => {
      axios
        .get(`${API_URL}/books`)
        .then((response) => setBooks(response.data))
        .catch((error) => console.log(error));
    };
    //getAllBooks();
  }, []);
  return (
    <div className="main-container">
      <div className="card">
        <article>
          <Booklist />
        </article>
      </div>
    </div>
  );
};
export default Homepage;
