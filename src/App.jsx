import { useEffect, useState, useContext } from "react";
import "./styles/App.css";

import Sidebar from "./components/Sidebar.jsx";
import { useNavigate, Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import NotFound from "./components/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WorkWithUs from "./components/WorkWithUs.jsx";
import FilteredBooks from "./components/FilteredBooks.jsx";
import BooksList from "./assets/BooksList.json";
import BookCard from "./components/BookCard.jsx";
import FavouritesList from "./components/FavouritesList.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import FavoritesContext from "./components/FavoritesContext.jsx";
import ShoppingCartContext from "./components/ShoppingCartContext.jsx";
import ApplicantsList from "./components/ApplicantsList.jsx";

function App() {
  // Access favorites context
  const { favorites } = useContext(FavoritesContext);
  // Access shopping cart context
  const { cartItems } = useContext(ShoppingCartContext);
  const [books, setBooks] = useState([]);

  //initialize with no books before filtering & restore filtered books
  const [filteredBooks, setFilteredBooks] = useState(
    JSON.parse(localStorage.getItem("filteredBooks")) || []
  );
  //checks if a filter is a applied & restore filtered view
  const [isFilteredView, setFilteredView] = useState(
    JSON.parse(localStorage.getItem("isFilteredView")) || false
  );
  //get navigation on pages from React Router
  const navigate = useNavigate();

  //handle the navigation to a new page
  const handleNavigation = (path) => {
    //navigate to a new page
    if (path === "/") {
      setFilteredView(false);
      //persist state
      localStorage.setItem("isFilteredView", false);
    }
    navigate(path);
  };

  //filter books by genre
  const filterBooks = (genre) => {
    let filtered = [];
    //show all Books
    if (genre === "All") {
      filtered = BooksList;
    } else {
      filtered = BooksList.filter((book) => book.genre === genre);
      setFilteredBooks(filtered);
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
    //initialize books list
    if (!filteredBooks.length) {
      setFilteredBooks(BooksList);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/*pass on the filter function to the sidebar*/}
        <Sidebar onFilter={filterBooks} onNavigate={handleNavigation} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/workWithUs" element={<WorkWithUs />} />
            <Route
              path="/filtered"
              element={
                isFilteredView && filteredBooks.length > 0 ? (
                  <FilteredBooks books={filteredBooks} />
                ) : (
                  <Homepage />
                )
              } //redirect to Homepage if no books
            />
            <Route path="/book/:title" element={<BookCard />} />
            <Route path="/favorites" element={<FavouritesList />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/workWithUs" element={<WorkWithUs />} />
            <Route path="/applicantsList" element={<ApplicantsList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
