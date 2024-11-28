import "../styles/Footer.css";
import { Link } from "react-router-dom";
import GitHubLogo from "../assets/images/GitHubLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="https://github.com/danadi87/the-wandering-quill">
        <img src={GitHubLogo} alt="Git Hub Logo" className="git-logo"></img>
      </Link>
      <h1>About us</h1>
    </div>
  );
};

export default Footer;
