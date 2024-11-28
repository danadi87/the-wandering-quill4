import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ onFilter }) => {
  const genre = [
    "All",
    "Bestsellers",
    "Fiction",
    "Non-fiction",
    "Business",
    "Thriller",
    "Psychology",
  ];
  return (
    <div className="container">
      <div className="card">
        <div className="sidebar-search">
          <form autoComplete="off">
            <input type="text" placeholder="Search..."></input>
          </form>
        </div>
        <ul className="sidebar">
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
