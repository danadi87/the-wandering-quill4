import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/apiConfig";

const RequestABook = ({ setBooks }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    name: "",
    phoneNumber: "",
    emailAdress: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    //bookRequested();
  }, []);

  const bookRequested = () => {};
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/requested`, formData)
      .then((response) => {
        setBooks((prev) => {
          return [...prev, response.data];
        });
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="formBooks">
      <form className="requestAbook" onSubmit={handleSubmit}>
        <h2>Work with us</h2>
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
                maxLength={55}
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

          {/* Type Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="availability">Genre</label>
            </div>
            <div className="col-field">
              <select
                id="booktype"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                required
                className="field"
              >
                <option value="">----Please Select----</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
              </select>
            </div>
          </div>

          {/* Edition Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="description">Description</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                id="edition"
                name="description"
                placeholder="Edition number"
                value={formData.description}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>

          {/* Name Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="location">Name</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                maxLength={254}
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="field"
              />
            </div>
          </div>

          {/* Phone Number Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="phoneNumber">Phone Number</label>
            </div>
            <div className="col-field">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="field"
              />
            </div>
          </div>

          {/* Email Address Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="emailAdress">Email Address</label>
            </div>
            <div className="col-field">
              <input
                type="email"
                maxLength={254}
                id="emailAdress"
                name="emailAdress"
                placeholder="Email Address"
                value={formData.emailAdress}
                onChange={handleChange}
                className="field"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="add-RequestABook-button">
          I want it!
        </button>
      </form>
    </div>
  );
};

export default RequestABook;
