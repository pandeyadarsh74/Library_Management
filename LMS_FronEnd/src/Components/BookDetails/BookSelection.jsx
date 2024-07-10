import React, { useState, useEffect } from "react";

function BookSelection({ onBookSelected }) {
  const [books, setBooks] = useState([]);

  // Fetch book data (replace with your data fetching logic)
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(" http://localhost:8080/api/books");
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  const handleBookChange = (event) => {
    const selectedBookNumber = event.target.value;
    onBookSelected(selectedBookNumber);
  };

  return (
    <div>
      <label htmlFor="bookNumber">Select Book:</label>
      <select id="bookNumber" onChange={handleBookChange}>
        <option value="">Select a Book</option>
        {books.map((book) => (
          <option key={book.bookNumber} value={book.bookNumber}>
            {book.bookNumber} - {book.bookName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BookSelection;