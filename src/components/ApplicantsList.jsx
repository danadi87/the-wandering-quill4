import React from "react";
import WorkWithUs from "./WorkWithUs";

const ApplicantsList = () => {
  const [applications, setAppications] = useState([]);
  const addApplication = (formData) => {
    setAppications((prev) => [...prev, formData]);
  };
  return (
    <div>
      <h1>Job Applications</h1>
      <WorkWithUs onSubmit={addApplication} />
      <h2>Applications received</h2>
      <div className="applications-list">
        {applications.length === 0 ? (
          <p>No applications submitted yet.</p>
        ) : (
          applications.map((app, index) => (
            <div key={index} className="application-card">
              <p>
                <strong>Name:</strong> {app.name}
              </p>
              <p>
                <strong>Surname:</strong> {app.surname}
              </p>
              <p>
                <strong>Availability:</strong> {app.availability}
              </p>
              <p>
                <strong>Experience:</strong> {app.experience}
              </p>
              <p>
                <strong>Location:</strong> {app.location}
              </p>
              <p>
                <strong>Phone Number:</strong> {app.phoneNumber}
              </p>
              <p>
                <strong>Email Address:</strong> {app.emailAdress}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ApplicantsList;
