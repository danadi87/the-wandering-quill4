import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/apiConfig";

const UpdateBook = (setBooks) => {
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
  });

  useEffect(() => {
    axios
      .get(`${API_URL}/books/${id}`)
      .then((response) => {
        console.log(response.data);
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
          <label>Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Edition</label>
          <input
            type="text"
            name="edition"
            value={formData.edition}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="emailAdress"
            value={formData.emailAdress}
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
