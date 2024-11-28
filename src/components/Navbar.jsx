import "../styles/Navbar.css";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="The Wandering Quill" className="app-logo"></img>
      <span> The Wandering Quill</span>
      <h1>My account</h1>
      <h1>Cart</h1>
    </div>
  );
};

export default Navbar;
