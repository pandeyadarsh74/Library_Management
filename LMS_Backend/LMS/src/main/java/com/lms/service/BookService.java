package com.lms.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lms.entity.Book;
import com.lms.entity.User;
import com.lms.repository.BookRepository;
import com.lms.repository.UserRepository;





@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    public Book findById(Long bookId) {
        return bookRepository.findById(bookId).orElse(null);
    }

    public Book save(Book book) throws Exception {
    	Optional<Book> book1 = bookRepository.findById(book.getBookId());
    	if(book1.isPresent()) {
    		throw new Exception("Book Already Exists");
    	}
        return bookRepository.save(book);
    }

    public void deleteById(Long bookId) {
        bookRepository.deleteById(bookId);
    }

	public Book editBook(Long bookId, Book book) {
		Book oldBook = bookRepository.findById(bookId).get();
		oldBook.setBookName(book.getBookName());
		oldBook.setAuthorName(book.getAuthorName());
		
		return bookRepository.save(oldBook);
	}
    
    
 
    
    public void returnBook(Long bookId) {
        Book book = findById(bookId);
        if (book != null && book.isIssued()) {
        	book.setBookId(bookId);
            book.setUserId(null);
            book.setIssued(false);
          
      
       
    } 
        bookRepository.save(book);
    
}}

