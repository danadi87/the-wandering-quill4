import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WorkWithUs = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    availability: "",
    experience: "",
    location: "",
    phoneNumber: "",
    emailAdress: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApplications =
      JSON.parse(localStorage.getItem("applications")) || [];
    newApplications.push(formData);
    localStorage.setItem("applications", JSON.stringify(newApplications));
    navigate("/");
  };
  return (
    <div className="formJobs">
      <form className="WorkWithUs" onSubmit={handleSubmit}>
        <h2>Work with us</h2>
        <div className="form-fields">
          {/* Name Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="name">Name</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                maxLength={55}
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>

          {/* Surname Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="surname">Surname</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                maxLength={55}
                id="surname"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>

          {/* Availability Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="availability">Availability</label>
            </div>
            <div className="col-field">
              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
                className="field"
              >
                <option value="">----Please Select----</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </div>
          </div>

          {/* Experience Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="experience">Experience</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                maxLength={254}
                id="experience"
                name="experience"
                placeholder="Experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>

          {/* Location Field */}
          <div className="row">
            <div className="col-label">
              <label htmlFor="location">Location</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                maxLength={254}
                id="location"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
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
                required
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
                required
                className="field"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="add-application-button">
          Apply!
        </button>
      </form>
    </div>
  );
};

export default WorkWithUs;
