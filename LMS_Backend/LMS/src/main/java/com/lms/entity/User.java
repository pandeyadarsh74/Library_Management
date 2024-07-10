package com.lms.entity;



import jakarta.persistence.*;

@Entity
public class User {

	
	    @Id
	  //  @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    
	 //   @Pattern(regexp = "([A-Za-z])+(\\s[A-Za-z]+)*", message = "{customer.invalid.name}")
	    private String name;
	    
	   


		//@NotNull(message = "{email.absent}")
	//	@Pattern(regexp = "[a-zA-Z0-9._]+@[a-zA-Z]{2,}\\.[a-zA-Z][a-zA-Z.]+"
	 //   , message = "{invalid.email.format}")
	    private String email;




		public Long getId() {
			return id;
		}




		public void setId(Long id) {
			this.id = id;
		}




		public String getName() {
			return name;
		}




		public void setName(String name) {
			this.name = name;
		}




		public String getEmail() {
			return email;
		}




		public void setEmail(String email) {
			this.email = email;
		}




	
		
		
	    
	    
	    
	    
	    
	    
	    
	    
	    
		}



		

		
	
	
    
    
