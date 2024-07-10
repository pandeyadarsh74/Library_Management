package com.lms.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.lms.entity.Book;
import com.lms.entity.User;
import com.lms.repository.UserRepository;





@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
   
   
    
    public User save(User user) throws Exception {
    	Optional<User> user1 = userRepository.findById(user.getId());
    	if(user1.isPresent()) {
    		throw new Exception("User Already Exists");
    	}
        return userRepository.save(user);
    }

	public List<User> findAll() {
		
		return userRepository.findAll();
	}
	
	 public void deleteById(Long id) {
	        userRepository.deleteById(id);
	    }

	public User findById(long userId) {
		
		return userRepository.findById(userId).orElse(null);
	}


	
    
 

} 