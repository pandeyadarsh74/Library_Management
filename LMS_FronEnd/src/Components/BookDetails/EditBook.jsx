import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditBook() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    bookId: '',
    bookName: '',
    authorName: '',
    issued: false,
    userId: null
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/books/${bookId}`);
      setBook(response.data); // Assuming response.data is the book object
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/books/${bookId}`, book);
      console.log('Book updated successfully:', book);
      setSuccessMessage(`Book with ID ${bookId} updated successfully.`);
      setErrorMessage("");
      setTimeout(() => {
        navigate('/bookinfo');
      }, 2000);
      // Optionally, redirect to BookInfo page or show a success message
    } catch (error) {
      console.error('Error updating book:', error);
      setSuccessMessage("");
      setErrorMessage("Error updating book:",error);
      // Handle error state
    }
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bookId">Book ID:</label>
          <input
            type="text"
            id="bookId"
            name="bookId"
            value={book.bookId}
            onChange={handleInputChange}
            readOnly // Assuming bookId cannot be changed
          />
        </div>
        <div>
          <label htmlFor="bookName">Book Name:</label>
          <input
            type="text"
            id="bookName"
            name="bookName"
            value={book.bookName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="authorName">Author Name:</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={book.authorName}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Update Book</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}

export default EditBook;
