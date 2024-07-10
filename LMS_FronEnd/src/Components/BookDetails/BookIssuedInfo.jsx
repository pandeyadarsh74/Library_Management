import React, { useState, useEffect } from 'react';
 import './BookIssuedInfo.css'
 import {Link , useParams } from 'react-router-dom';
import IssueService from '../Service/IssueService';
function BookIssuedInfo () {
  // State to store book issue information
 
  const [books, setBooks] = useState([]);
 

  const {bookId} = useParams();
 console.log(bookId);
 
 const[msg,setMsg] = useState("");
 
   useEffect(() => {
     fetchBooks();
   }, []);
  
   const fetchBooks = async () => {
     try {
       const response = await fetch('http://localhost:8080/api/books');
       if (!response.ok) {
         throw new Error('Failed to fetch data');
       }
       const data = await response.json();
       setBooks(data);
     } catch (error) {
       console.error('Error fetching books:', error);
     }
   
   };

  const returnBook =(bookId) =>{  
    const confirmReturn = window.confirm('Are you sure ? You want to return this book?');
  if (confirmReturn) {
    IssueService.returnBook(bookId)
    .then((res) => {
      setMsg("Returned Successfully !");
      fetchBooks();
      }).catch((error) =>{
      console.log(error);
    });
  } else {
    console.log('Return cancelled');
    alert('Return cancelled');
  }
   
  };
 
  return (
    <div>
      <h1>Book Issue Information</h1>
      <table class="table table-primary table-striped table-bordered border-primary">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Issued</th>
            <th>Issued To </th>
            <th>Action</th>
         
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.bookId}>
              <td>{book.bookId}</td>
              <td>{book.bookName}</td>
              <td>{book.issued ? 'Yes' : 'No'}</td>
              <td><>{book.userId ?  book.userId : 'Null' }</></td>
              <td>
              <Link to={'/issuebook'} className = "btn btn-sm btn-primary"> Issue </Link>
                <button  onClick={() => returnBook(book.bookId)} className='btn btn-sm btn-danger ms-1'>Return</button>
                
                </td>
         
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default BookIssuedInfo;