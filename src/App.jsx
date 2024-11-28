import { useEffect, useState } from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar.jsx";
import BooksList from "./assets/BooksList.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import NotFound from "./components/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WorkWithUs from "./components/WorkWithUs.jsx";

function App() {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  //initialize with all books before filtering
  const [filteredBooks, setFilteredBooks] = useState(BooksList);

  //handle the favourite toggle
  const handleClickFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);
  };

  //filter books by genre
  const filterBooks = (genre) => {
    //show all Books
    if (genre === "All") {
      setFilteredBooks(BooksList);
    } else {
      const filtered = BooksList.filter((book) => book.genre === genre);
      setFilteredBooks(filtered);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/workWithUs" element={<WorkWithUs />} />
          {/*pass on the filter function to the sidebar*/}
        </Routes>
        <Navbar />
        <Sidebar onFilter={filterBooks} />
        <div className="main-content">
          {filteredBooks.map((book, id) => (
            <div key={id} className="book-item">
              <img src={book.cover_image} />
              <div className="buttons">
                <button
                  className="favourite"
                  onClick={() => handleClickFavorite(book.id)}
                >
                  <img src="./assets/images/heart.png" />
                </button>
                <button className="cart">
                  {" "}
                  <img src="./assets/images/heart.png" />
                </button>
              </div>
              <h2>{book.title}</h2>
              <h4>{book.author}</h4>
              <p>{book.genre}</p>
              <p>{book.description}</p>
              <p>{book.pages}</p>
              <p>{book.publish_year}</p>
            </div>
          ))}
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
