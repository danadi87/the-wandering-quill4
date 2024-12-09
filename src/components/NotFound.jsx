import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
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
