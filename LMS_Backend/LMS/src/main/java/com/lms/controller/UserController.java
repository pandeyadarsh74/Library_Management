package com.lms.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;





import com.lms.entity.Book;
import com.lms.entity.User;
import com.lms.repository.UserRepository;
import com.lms.service.UserService;


@CrossOrigin
@RestController
@RequestMapping("api/")

public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    // http://localhost:8080/api/users/register
    @PostMapping("users/register")
    public User addUser(@RequestBody User user) throws Exception {
        return userService.save(user);
    }
    			
    		  
   
  
       				    
    
 
    
 // http://localhost:8080/api/users/all
    @GetMapping("users/all")
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
 // http://localhost:8080/api/users/{id}
    @GetMapping("users/{id}")
    public User getUserById(@PathVariable long id) {
        return userService.findById(id);
    }
    

    @DeleteMapping("users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
    }

   
}