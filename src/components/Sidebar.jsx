import React, { useState } from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Sidebar = ({ onFilter }) => {

  //for the search input
  const [inputState, setInputState] = useState("");
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

  //search bar function
  const handleSearch = (e) => {
    e.preventDefault();
    if (inputState.trim() !== "") {
      navigate(`/search?query=${inputState.trim()}`);
    }
  };
  return (
    <div className="container">
      <div className="card">
        {/*Search bar*/}
        <div className="sidebar-search">
          <form autoComplete="off" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={inputState}
              onChange={(e) => setInputState(e.target.value)}
            ></input>
            <button type="submit">Search</button>
          </form>
        </div>
        {/*Filter by genre*/}
        <ul className="sidebar">
          <li className="homepage">
            <Link
              to="/"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Link>
          </li>
          {genre.map((genre, id) => (
            <li key={id}>
              <Link
                to={`/filter/${genre.toLowerCase()}`}
                onClick={(e) => {
                  onFilter(genre); // Trigger filter
                }}
              >
                {genre}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
