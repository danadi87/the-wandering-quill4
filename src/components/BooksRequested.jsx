import React, { useState } from "react";

const BooksRequested = () => {
  const [booksRequested, setBooksRequested] = useState(
    JSON.parse(localStorage.getItem("booksRequested")) || []
  );

  const addBook = (formData) => {
    const updatedBooksRequested = [...booksRequested, formData];
    setBooksRequested(updatedBooksRequested);
    localStorage.setItem(
      "booksRequested",
      JSON.stringify(updatedBooksRequested)
    );
  };
  console.log("hello");
  return (
    <div>
      <h2>Books requested</h2>
      <div className="books-requested">
        {booksRequested.length === 0 ? (
          <p>No books requested yet.</p>
        ) : (
          booksRequested.map((app, index) => (
            <div key={index} className="booksRequested-card">
              <p>
                <strong>Title:</strong> {app.title}
              </p>
              <p>
                <strong>Author:</strong> {app.author}
              </p>
              <p>
                <strong>Type:</strong> {app.type}
              </p>
              <p>
                <strong>Edition:</strong> {app.edition}
              </p>
              <p>
                <strong>Name:</strong> {app.name}
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

export default BooksRequested;
