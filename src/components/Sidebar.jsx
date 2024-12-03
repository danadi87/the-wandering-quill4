import React from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ onFilter, onNavigate }) => {
  const genre = [
    "All",
    "Bestsellers",
    "Fiction",
    "Non-fiction",
    "Business",
    "Thriller",
    "Psychology",
  ];
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <div className="sidebar-search">
          <form autoComplete="off">
            <input type="text" placeholder="Search..."></input>
          </form>
        </div>
        <ul className="sidebar">
          <li className="homepage">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("/");
              }}
            >
              Home
            </Link>
          </li>
          {genre.map((genre, id) => (
            <li key={id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent page reload
                  onFilter(genre); // Trigger filter
                }}
              >
                {genre}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
