import React from "react";
import { Link } from "react-router-dom";
import "/notFound.png";
import "../styles/NotFound.css";

const NotFoundPage = () => {
  return (
    <div className="notfound">
      <img src="/notFound.png" />
      <div></div>
      <h1>404 - Page Not Found</h1>
      <p>
        Welcome to The Wandering Quill, where every book tells a story — but it
        seems you've wandered off the map.
      </p>
      <p>Would you like to return to our homepage and rediscover your path?</p>
      <Link to="/" className="home-link">
        Take me Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
