import "../styles/Footer.css";
import { Link } from "react-router-dom";
import GitHubLogo from "../assets/images/GitHubLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="https://github.com/danadi87/the-wandering-quill">
        <img src={GitHubLogo} alt="Git Hub Logo" className="git-logo"></img>
      </Link>
      <h2>About us</h2>
      <Link to="/workWithUs" target="_blank">
        <h2>Work with us</h2>
      </Link>
      <Link to="/ApplicantsList"></Link>
    </div>
  );
};

export default Footer;
