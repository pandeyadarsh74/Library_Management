package com.lms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lms.entity.Book;
import com.lms.entity.User;
import com.lms.service.BookService;

@CrossOrigin
@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;
    
    @Autowired
    private Environment env;
    
    
    
   //  http://localhost:8080/api/books
    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.findAll();
    }


    // http://localhost:8080/api/books/{id}
    @GetMapping("/{bookId}")
    public Book getBook(@PathVariable Long bookId) {
        return bookService.findById(bookId);
    }

    
    //  http://localhost:8080/api/books
    @PostMapping
    public ResponseEntity<Book> addBook(@RequestBody Book book) throws Exception {
    	Book book1 = bookService.save(book);
    	
        return new ResponseEntity<Book>(book1,HttpStatus.ACCEPTED);
    }

    @PutMapping("/{bookId}")
    public Book updateBook(@PathVariable Long bookId, @RequestBody Book book) {
        // Additional logic to ensure you're updating the correct book
        return bookService.editBook(bookId,book);
    }

    @DeleteMapping("/{bookId}")
    public void deleteBook(@PathVariable Long bookId) {
        bookService.deleteById(bookId);
    }


   
   


// http://localhost:8080/api/books/issue-book
     
   


   @PutMapping("/return/{bookId}")
  public void returnBook(@PathVariable Long bookId) {
       bookService.returnBook(bookId);
	
     
   }
   
   
}    

