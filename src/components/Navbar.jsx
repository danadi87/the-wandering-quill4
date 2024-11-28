import "../styles/Navbar.css";

import Logo from "../assets/images/Logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="The Wandering Quill" className="app-logo"></img>
      <span> The Wandering Quill</span>
      <span>My account</span>
      <span>My Favourites</span>
      <span>Cart</span>
    </div>
  );
};

export default Navbar;
