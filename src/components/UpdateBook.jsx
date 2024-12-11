import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/apiConfig";
import Booklist from "./BookList.jsx";

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
    <div>
      <h2>Edit Book</h2>
      <form className="edit-book-form">
        <div>
          <label>Cover Image</label>
          <input
            type="text"
            name="cover_image"
            value={formData.cover_image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Short Description</label>
          <textarea
            name="short_description"
            value={formData.short_description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Pages</label>
          <input
            type="text"
            name="pages"
            value={formData.pages}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Publish Year</label>
          <input
            type="number"
            name="publish_year"
            value={formData.publish_year}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
