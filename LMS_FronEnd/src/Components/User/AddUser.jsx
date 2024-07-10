import React, { useState } from "react";
import './AddUser.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
 const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const user = {id,name,email}
    
  //   fetch("http://localhost:8080/api/users/register",{
  //     method:"POST",
     
  //     headers:{"Content-Type":"application/json"},
  //     body:JSON.stringify(user)
  //   }).then(()=>{
       
  //     console.log("New User Added")
  //   })
  //   // Logic to add user to your data source (e.g., array, database)
  //   console.log("User added:", id, name, email);
  //   setId(""); // Clear form after submission
  //   setName("");
  //   setEmail("");
  //   setIsSubmitted(true);
  // };

 
  
   
 const handleSubmit = async (event) => {
  event.preventDefault();

  const newUser = {
      id: Number(id), // Assuming bookId is a number
      name,
      email
     
  };

       await axios.post("http://localhost:8080/api/users/register",newUser)
                   .then((res)=>{
                    setSuccessMessage(`User with ID ${res.data.id} successfully added.`);
                    setErrorMessage(""); // Clear any previous error messages
                    setId("");
                    setName("");
                    setEmail("");
                    setTimeout(() => {
                      navigate('/userinfo');
                    }, 2000);
                   }).catch((err)=>{
                    setErrorMessage(`User with ID ${id} already exists.`);
                    setSuccessMessage("");
                   })
                  }

  return (
    <div className="add-user-form">
      <h1>Add User</h1>
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="id">User ID:</label>
      <input
        type="number"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <br />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      
      <button className="add-user" type="submit">Add User</button>
    </form>
    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
</div>
  );
}

export default AddUser;