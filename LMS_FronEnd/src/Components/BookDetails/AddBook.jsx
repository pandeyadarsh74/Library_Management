import React, { useState } from "react";
import './AddBook.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBookForm() {
    const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  
   
 const handleAddBook = async (event) => {
  event.preventDefault();

  const newBook = {
      bookId: Number(bookId), // Assuming bookId is a number
      bookName,
      authorName,
      issued: false, // Assuming new books are not issued initially
      userId: null // Assuming userId is null initially
  };

       await axios.post('http://localhost:8080/api/books',newBook)
                   .then((res)=>{
                    setSuccessMessage(`Book with ID ${res.data.bookId} successfully added.`);
                    setErrorMessage(""); // Clear any previous error messages
                    setBookId("");
                    setBookName("");
                    setAuthorName("");
                    setTimeout(() => {
                      navigate('/bookinfo');
                    }, 2000);
                   }).catch((err)=>{
                    setErrorMessage(`Book with ID ${bookId} already exists.`);
                    setSuccessMessage("");
                   })
                  }

  


  return (
    <div className="add-book-form">
      <h1>Add Book</h1>
    <form className="form" onSubmit={handleAddBook}>
        <label htmlFor="bookId">Book ID:</label>
      <input
        type="number"
        id="bookId"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
        required
      />
      <br />
      <label htmlFor="bookName">Book Name:</label>
      <input
        type="text"
        id="bookName"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="authorName">Author Name:</label>
      <input
        type="text"
        id="authorName"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        required
      />
      <br />
      <button className="add-book" type="submit">Add Book</button>
      
    </form>
    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
   
    </div>
  );
}

export default AddBookForm;