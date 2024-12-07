import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BooksRequested.css";

const BooksRequested = () => {
  const [booksRequested, setBooksRequested] = useState(
    JSON.parse(localStorage.getItem("booksRequested")) || []
  );
  const navigate = useNavigate();

  // const addBook = (formData) => {
  //   const updatedBooksRequested = [...booksRequested, formData];
  //   setBooksRequested(updatedBooksRequested);
  //   localStorage.setItem(
  //     "booksRequested",
  //     JSON.stringify(updatedBooksRequested)
  //   );
  // };
  // const handleUpdate = (index) => {
  //   console.log(`Edit button clicked for row ${index}`);
  //   // Add functionality to edit the selected row
  // };

  // console.log("hello");
  return (
    <div>
      <h2>Books requested</h2>
      <div className="books-requested">
        {booksRequested.length === 0 ? (
          <p>No books requested yet.</p>
        ) : (
          <table className="books-requested-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Type</th>
                <th>Edition</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {booksRequested.map((app, index) => (
                <tr key={index}>
                  <td>{app.title}</td>
                  <td>{app.author}</td>
                  <td>{app.type}</td>
                  <td>{app.edition}</td>
                  <td>{app.name}</td>
                  <td>{app.phoneNumber}</td>
                  <td>{app.emailAdress}</td>
                  <td>
                    <button onClick={() => navigate(`/edit-book/${index}`)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BooksRequested;
