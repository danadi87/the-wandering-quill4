import "../styles/Footer.css";
import { Link } from "react-router-dom";
import GitHubLogo from "/GitHubLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="https://github.com/danadi87/the-wandering-quill4">
        <img src={GitHubLogo} alt="Git Hub Logo" className="git-logo"></img>
      </Link>
      <Link to="/aboutUs">
        <h2>About us</h2>
      </Link>
      <Link to="/addABook">
        <h2>Add a book</h2>
      </Link>
      <Link to="/booksRequested"></Link>
    </div>
  );
};

export default Footer;
