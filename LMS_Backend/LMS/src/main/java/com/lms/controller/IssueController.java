package com.lms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lms.entity.Book;
import com.lms.entity.IssueRequest;
import com.lms.repository.BookRepository;
import com.lms.service.IssueService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class IssueController {

	

    @Autowired
    private IssueService issueService;
    @Autowired
    private BookRepository bookRepository;
	
//  http://localhost:8080/api/issue-book
    @PostMapping("/issue-book")
    public ResponseEntity<String> issueBook(@RequestBody Book book ) throws Exception {
        issueService.issueBook(book.getBookId(),book.getUserId() );
        return ResponseEntity.ok("Book Issued");
    }
 //   http://localhost:8080/api/return/{bookId}
   
    @PostMapping("/return/{bookId}")
    
    public void returnBook(@PathVariable Long bookId) {
        issueService.returnBook(bookId);
    }
    
//    public ResponseEntity<String> returnBook(@RequestBody Book book) throws Exception {
//        issueService.returnBook(book.getBookId());
//        return ResponseEntity.ok("Book Returned with Book ID : " +book.getBookId() );
//		
//       
//    }
    
   
}


	

