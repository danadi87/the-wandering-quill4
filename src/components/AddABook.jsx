import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/apiConfig";
import Booklist from "./BookList.jsx";
import "../styles/Addform.css";

const addABook = ({ setBooks }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    short_description: "",
    pages: "",
    cover_image: "",
    publish_year: "",
    price: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    //bookAdded();
  }, []);

  const bookAdded = () => {};
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/books`, formData)
      .then((response) => {
        setBooks((prev) => {
          return [...prev, response.data];
        });
        console.log(response);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="formBooks">
      <form className="addAbook" onSubmit={handleSubmit}>
        <h2>Add a book</h2>
        <div className="form-fields">
          {/* Title Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="title">Title</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                maxLength={255}
                id="title"
                name="title"
                placeholder="Book title"
                value={formData.title}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>

          {/* Author Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="author">Author</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                maxLength={155}
                id="author"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>

          {/* Description Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="description">Description</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>

          {/* Short Description Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="short_description">Short Description</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                id="short_description"
                name="short_description"
                value={formData.short_description}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>

          {/* Genre Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="genre">Genre</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                id="genre"
                name="genre"
                placeholder="Genre"
                value={formData.genre}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>

          {/* Pages Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="location">Pages</label>
            </div>
            <div className="col-field">
              <input
                type="number"
                id="pages"
                name="pages"
                placeholder="Number of pages"
                value={formData.pages}
                onChange={handleChange}
                className="field"
              />
            </div>
          </div>

          {/* Publish Year Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="publish_year">Publish year</label>
            </div>
            <div className="col-field">
              <input
                type="number"
                id="publish_year"
                name="publish_year"
                placeholder="Publish Year"
                value={formData.publish_year}
                onChange={handleChange}
                className="field"
              />
            </div>
          </div>

          {/* Price Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="price">Price</label>
            </div>
            <div className="col-field">
              <input
                type="number"
                maxLength={254}
                id="price"
                name="price"
                placeholder="Price of the book"
                value={formData.price}
                onChange={handleChange}
                className="field"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="addABook-button">
          Add my book!
        </button>
      </form>
    </div>
  );
};

export default addABook;
