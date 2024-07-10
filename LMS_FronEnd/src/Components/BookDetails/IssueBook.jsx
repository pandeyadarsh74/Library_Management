import React, { useEffect,useState } from "react";
import BookSelection from "./BookSelection";
import UserSelection from "./UserSelection";
import './IssueBookForm.css';




function IssueBookForm() {
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookOptions, setBookOptions] = useState([]);
  const [userOptions, setUserOptions] = useState([]);
 

  // Function to fetch book options from database
  const fetchBookOptions = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/books'); // Replace with your API endpoint
      const data = await response.json();
      setBookOptions(
        data.map((book) => ({ value: book.bookId, label: book.bookName })) // Customize mapping
      );
    } catch (error) {
      console.error('Error fetching book options:', error);
    }
  };

  // Function to fetch user options from database
  const fetchUserOptions = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/users/all'); // Replace with your API endpoint
      const data = await response.json();
      setUserOptions(
        data.map((user) => ({ value: user.id, label: user.name })) // Customize mapping
      );
    } catch (error) {
      console.error('Error fetching user options:', error);
    }
  };

  // Fetch options on component mount
  useEffect(() => {
    fetchBookOptions();
    fetchUserOptions();
  }, []);
 
  const handleIssueBook = () => {

    setUserId('');
    setIsSubmitted(true);
    // Make API request to issue the book
    fetch('http://localhost:8080/api/issue-book', {
    //  mode:  'no-cors' ,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bookId, userId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to issue book.');
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
        setBookId('');
       
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };
 
  return (
    
    <div className="issue-book-form">
    <h1>Issue Book</h1>
    <form className="form" onSubmit={handleIssueBook}>
      <label htmlFor="bookId">Book ID:</label>
      <select id="bookId" value={bookId} onChange={(event) => setBookId(event.target.value)}>
        {bookOptions.map((option) => (
          <option key={option.value} value={option.value}>
           {option.value}-{option.label}
          </option>
        ))}
      </select>
      <label htmlFor="userId">User ID:</label>
      <select id="userId" value={userId} onChange={(event) => setUserId(event.target.value)}>
        {userOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}-{option.label}
          </option>
        ))}
      </select>
      <button type="submit" >Issue Book</button>
    </form>
    {isSubmitted && (
      <p className="success-message">Book with Book ID : {bookId} issued successfully!  </p>
    )}
  </div>
  );
}
export default IssueBookForm