import "../styles/Footer.css";
import { Link } from "react-router-dom";
import GitHubLogo from "/GitHubLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="https://github.com/danadi87/the-wandering-quill">
        <img src={GitHubLogo} alt="Git Hub Logo" className="git-logo"></img>
      </Link>
      <h2>About us</h2>
      <Link to="/requestABook" target="_blank">
        <h2>Request a book</h2>
      </Link>
      <Link to="/booksRequested"></Link>
    </div>
  );
};

export default Footer;
