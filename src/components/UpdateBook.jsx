import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/apiConfig";
import Booklist from "./BookList.jsx";
import "../styles/Editform.css";

const UpdateBook = ({ setBooks }) => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    axios
      .get(`${API_URL}/books/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    axios
      .put(`${API_URL}/books/${id}`, formData)
      .then((response) => {
        setBooks();
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="formBooks">
      <form className="editAbook">
        <h2>Edit Book</h2>
        <div className="form-fields">
          <div className="row">
            <div className="col-label">
              <label>Cover Image</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                name="cover_image"
                value={formData.cover_image}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label>Title</label>
              <div className="col-field">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label>Author</label>
              <div className="col-field">
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label>Description</label>
              <div className="col-field">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label>Short Description</label>
              <div className="col-field">
                <textarea
                  name="short_description"
                  value={formData.short_description}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label>Genre</label>
              <div className="col-field">
                <input
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label>Pages</label>
              <div className="col-field">
                <input
                  type="text"
                  name="pages"
                  value={formData.pages}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label>Publish Year</label>
              <div className="col-field">
                <input
                  type="number"
                  name="publish_year"
                  value={formData.publish_year}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label>Price</label>
              <div className="col-field">
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
