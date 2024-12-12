import { useEffect, useState, useContext } from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar.jsx";
import { useNavigate, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import NotFound from "./components/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AddABook from "./components/AddABook.jsx";
import FilteredBooks from "./components/FilteredBooks.jsx";
import BooksList from "./assets/BooksList.json";
import FavouritesList from "./components/FavouritesList.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import FavoritesContext from "./components/FavoritesContext.jsx";
import ShoppingCartContext from "./components/ShoppingCartContext.jsx";
import BookDetails from "./components/BookDetails.jsx";
import UpdateBook from "./components/UpdateBook.jsx";
import axios from "axios";
import { API_URL } from "./config/apiConfig";
import AboutUs from "./components/AboutUs.jsx";
import BookContext from "./components/BookContext.jsx";

function App() {
  // Access favorites context
  const { favorites } = useContext(FavoritesContext);
  // Access shopping cart context
  const { cartItems } = useContext(ShoppingCartContext);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilteredView, setFilteredView] = useState(false);
  const { filteredBooks, isFiltered } = useContext(BookContext);

  //get navigation on pages from React Router
  const navigate = useNavigate();

  //handle the navigation to a new page
  const handleNavigation = (path) => {
    //navigate to a new page
    if (path === "/") {
      //reset filter view state
      setFilteredView(false);
    }
    navigate(path);
  };

  //filter books by genre
  const filterBooksHandler = (genre) => {
    filteredBooks(BooksList, genre); // Use context function
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
      <Sidebar
        setBooks={setBooks}
        onNavigate={handleNavigation}
        filterBooks={filteredBooks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage searchTerm={searchTerm} />} />

          <Route
            path="/filtered/:genre"
            element={<FilteredBooks books={books} searchTerm={searchTerm} />}
          />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/favorites" element={<FavouritesList />} />
          <Route path="/shopping_cart" element={<ShoppingCart />} />
          <Route
            path="/updateBook/:id"
            element={<UpdateBook setBooks={setBooks} />}
          />
          <Route path="/addABook" element={<AddABook setBooks={setBooks} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
