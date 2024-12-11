import React, { useState } from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/apiConfig";

const Sidebar = () => {
  //for the search input
  const [books, setBooks] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const genre = [
    "All",
    "Bestsellers",
    "Fiction",
    "Non-fiction",
    "Business",
    "Thriller",
    "Psychology",
  ];

  // Filter function
  const handleFilter = (genre) => {
    const filters = genre === "All" ? "/books" : `/books?genre=${genre}`;
    axios
      .get(`${API_URL}${filters}`)
      .then((response) => {
        setBooks(response.data); // Update the books list in the parent component
        navigate(`/filter/${genre.toLowerCase()}`);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <div className="card">
        {/*Search bar*/}
        <div className="sidebar-search">
          {/* <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
         {books.filter((book) => {
            if (book.includes(searchTerm)) {
              return true;
            }
          })}*/}
        </div>
        {/*Filter by genre*/}
        <ul className="sidebar">
          <li className="homepage">
            <button className="filter-link">
              <Link
                to="/"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Link>
            </button>
          </li>
          {genre.map((genre, id) => (
            <li key={id}>
              <button
                onClick={() => handleFilter(genre)}
                className="filter-link"
              >
                {genre}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
