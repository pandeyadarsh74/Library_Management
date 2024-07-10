import React, { useState, useEffect } from 'react';
 import './BookIssuedInfo.css'
 import {Link , useParams } from 'react-router-dom';
import IssueService from '../Service/IssueService';
import  axios  from 'axios';
  
  function ReturnBook() {
    const [books, setBooks] = useState([]); // Array to store book data
    const [selectedBookId, setSelectedBookId] = useState(null); // Selected book ID
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [returnSuccess, setReturnSuccess] = useState(false);
  
    useEffect(() => {
      const fetchBooks = async () => {
        try {
          setIsLoading(true); // Set loading state
          const response = await axios.get("http://localhost:8080/api/books");
          setBooks(response.data);
        } catch (error) {
          setError(error.message); // Set error state
        } finally {
          setIsLoading(false); // Clear loading state even on error
        }
      };
  
      fetchBooks();
    }, []); // Empty dependency array ensures fetching books only once
  
    const handleSelectChange = (event) => {
      setSelectedBookId(event.target.value);
    };
  
    const handleReturnBook = async () => {
      if (!selectedBookId) {
        setError('Please select a book to return.');
        return;
      }
  
      try {
        setIsLoading(true); // Set loading state
        const response = await axios.put(" http://localhost:8080/api/books");
        if (response.status === 200) { // Handle successful return
          setReturnSuccess(true);
          setSelectedBookId(null); // Clear selection after successful return
        } else {
          setError('Book return failed. Please try again.');
        }
      } catch (error) {
        setError(error.message); // Set error state for unexpected issues
      } finally {
        setIsLoading(false); // Clear loading state after return attempt
      }
    };
  
    return (
      <div className="return-book">
        <h2>Return Book</h2>
        {isLoading && <p>Loading book list...</p>}
        {error && <p className="error-message">{error}</p>}
        {returnSuccess && <p className="success-message">Book returned successfully!</p>}
  
        <select value={selectedBookId} onChange={handleSelectChange}>
          <option value="">-- Select Book --</option>
          {books.map((book) => (
            <option key={book.bookId} value={book.bookId}>
              {book.bookName} - {book.authorName}
            </option>
          ))}
        </select>
  
        <button type="button" onClick={handleReturnBook} disabled={isLoading}>
          {isLoading ? 'Returning...' : 'Return Book'}
        </button>
      </div>
    );
  }
  
  
  
 
export default ReturnBook;