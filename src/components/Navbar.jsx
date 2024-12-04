import "../styles/Navbar.css";
import "./FavouritesList.jsx";
import "./ShoppingCart.jsx";
import "./Homepage.jsx";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";
import { useContext } from "react";
import FavoritesContext from "./FavoritesContext.jsx";
import ShoppingCartContext from "./ShoppingCartContext.jsx";

const Navbar = () => {
  const { favorites } = useContext(FavoritesContext);
  const { cart } = useContext(ShoppingCartContext);
  return (
    <div className="navbar">
      <img src={Logo} alt="The Wandering Quill" className="app-logo"></img>
      <Link to="/"> The Wandering Quill</Link>
      <Link to="/booksRequested">
        <span>Books Requested</span>
      </Link>
      {/*display the favorites count*/}
      <Link to="/favorites">
        My Favourites<span>({favorites.length})</span>{" "}
      </Link>
      {/*display the shopping cart count*/}
      <Link to="/cart">
        Shopping Cart<span>({cart.length})</span>
      </Link>
    </div>
  );
};

export default Navbar;
