import React, { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom';
import UserService from "../Service/UserService";

export default function UserInfo() {
  const [users, setUsers] = useState([]);
 

  const {id} = useParams();
  console.log(id);

  const[msg,setMsg] = useState("");

 

  useEffect(() => {
    fetchUsers();
  }, []);
 
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/users/all');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  
  const deleteUser =(id) =>{
    const confirmDelete = window.confirm('Are you sure ? You want to Delete this user?');
    if (confirmDelete) {
    UserService
    .deleteUser(id)
    .then((res) => {
      setMsg("Deleted Successfully !");
      fetchUsers();
    })
    .catch((error) =>{
      console.log(error);
    });
  }else {
    alert("User Deletion Unsuccesful")
  }};
 
  return (
    <div>
      <h1>User Info</h1>
      <table class="table table-info table-striped table-bordered border-info">
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Email ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={'/'} className = "btn btn-sm btn-primary"> Edit </Link>
                <button  onClick={() => deleteUser(user.id)} className='btn btn-sm btn-danger ms-1'>Delete</button>
                
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 

