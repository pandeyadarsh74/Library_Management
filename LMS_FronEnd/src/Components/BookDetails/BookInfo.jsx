import React, { useState, useEffect } from 'react';

import axios from 'axios';
import BookService from '../Service/BookService';

import {Link , useParams } from 'react-router-dom';
import './BookInfo.css'

function BookInfo() {
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



  

    const deleteBook =(bookId) =>{
      const confirmDelete = window.confirm('Are you sure ? You want to Delete this book?');
      if (confirmDelete) {
        BookService
          .deleteBook(bookId)
          .then((res) => {
            setMsg("Deleted Successfully !");
            fetchBooks();
          })
          .catch((error) =>{
            console.log(error);
          });
        }
       else{
        console.log('Delete cancelled');
        alert('Delete cancelled');
      }
    };

   



 
  return (
    <div>
      <h1>Book Info</h1>
      <table class="table table-success table-striped table-bordered border-success"   >
        
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.bookId}>
              <td>{book.bookId}</td>
              <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>
                <Link to={'/editBook/' +book.bookId} className = "btn btn-sm btn-primary"> Edit </Link>
                <button  onClick={() => deleteBook(book.bookId)} className='btn btn-sm btn-danger ms-1'>Delete</button>
                
                </td>

            </tr>
          ))}
        </tbody>
      </table>

     


    </div>
  );
};
 
export default BookInfo;
