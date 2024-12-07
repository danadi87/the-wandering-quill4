import { useEffect, useState, useContext } from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar.jsx";
import { useNavigate, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import NotFound from "./components/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import RequestABook from "./components/RequestABook.jsx";
import FilteredBooks from "./components/FilteredBooks.jsx";
import BooksList from "./assets/BooksList.json";
import FavouritesList from "./components/FavouritesList.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import FavoritesContext from "./components/FavoritesContext.jsx";
import ShoppingCartContext from "./components/ShoppingCartContext.jsx";
import BooksRequested from "./components/BooksRequested.jsx";
import BookDetails from "./components/BookDetails.jsx";
import axios from "axios";
import { API_URL } from "./config/apiConfig";

function App() {
  // Access favorites context
  const { favorites } = useContext(FavoritesContext);
  // Access shopping cart context
  const { cartItems } = useContext(ShoppingCartContext);
  const [books, setBooks] = useState([]);

  //get navigation on pages from React Router
  const navigate = useNavigate();

  //handle the navigation to a new page
  const handleNavigation = (path) => {
    //navigate to a new page
    if (path === "/") {
      //reset filter view state
      setFilteredView(false);
      //persist state
      localStorage.setItem("isFilteredView", false);
    }
    navigate(path);
  };

  //filter books by genre
  const filterBooks = (genre) => {
    let filtered;
    //show all Books
    if (genre === "All") {
      filtered = BooksList;
    } else {
      filtered = BooksList.filter((book) => book.genre === genre);
    }
    setFilteredBooks(filtered);
    //enable filtered view
    setFilteredView(true);
    //persist state
    localStorage.setItem("filteredBooks", JSON.stringify(filtered));
    localStorage.setItem("isFilteredView", true);
    //navigate to the filtered view
    navigate("/filtered");
  };

  useEffect(() => {
    const getAllBooks = () => {
      axios
        .get(`${API_URL}/books`)
        .then((response) => setBooks(response.data))
        .catch((error) => console.log(error));
    };
    getAllBooks();
  }, []);

  return (
    <>
      <Navbar />
      {/*pass on the filter function to the sidebar*/}
      <Sidebar onFilter={filterBooks} onNavigate={handleNavigation} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/filtered/:genre" element={<FilteredBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/favorites" element={<FavouritesList />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route
            path="/requestABook"
            element={<RequestABook setBooks={setBooks} />}
          />
          <Route path="/booksRequested" element={<BooksRequested />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
