package com.lms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lms.entity.Book;
import com.lms.entity.User;
import com.lms.repository.BookRepository;
import com.lms.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class IssueService {
	
	@Autowired
	private BookRepository bookRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	
	@Transactional
	  public void issueBook(Long bookId,Long id) throws Exception{
	    	Book book = bookRepository.findById(bookId).orElseThrow(()->new
	    			Exception("Book not found"));
	    
	    
	    User user = userRepository.findById(id).orElseThrow(()->new
				Exception("User not found"));
	    
	    if(book.isIssued()) {
	    	throw new Exception("Book is alredy issued");
	    }
	    book.setBookId(bookId);
	    book.setUserId(id);
	    book.setIssued(true);
	    bookRepository.save(book);
	}

	    
	    @Transactional
	public void returnBook(Long bookId) {
		Book book = bookRepository.findById(bookId).get();
		




	if(book.isIssued()) {
	
	
  
	book.setIssued(false);
	book.setBookId(bookId);
	book.setUserId(null);
	bookRepository.save(book);
	}

	    }

	  }
