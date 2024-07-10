import React, { useState, useEffect } from "react";

function UserSelection({ onUserSelected }) {
  const [users, setUsers] = useState([]);

  // Fetch user data (replace with your data fetching logic)
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:8080/api/users/all");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleUserChange = (event) => {
    const selectedUserId = event.target.value;
    onUserSelected(selectedUserId);
  };

  return (
    <div>
      <label htmlFor="userId">Select User:</label>
      <select id="userId" onChange={handleUserChange}>
        <option value="">Select a User</option>
        {users.map((user) => (
          <option key={user.userId} value={user.userId}>
            {user.userId} - {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserSelection;