// src/components/UsersList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./table.css"

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // Track the user being edited

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://brinewried.onrender.com/user/get');
      console.log(response.data.suc)
      setUsers(response.data.suc);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  const handleEdit = (user) => {
    // Set the user to be edited in the state
    setEditingUser(user);
  };

  const handleUpdateItemDetails = async () => {
    try {
      await axios.patch(`https://brinewried.onrender.com/user/update/${editingUser._id}`, editingUser);
      setEditingUser(null); // Clear the editingUser state after update
      fetchUsers(); // Fetch updated user list after update
    } catch (error) {
      console.log('Error updating user:', error);
    }
  };


  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://brinewried.onrender.com/user/delete/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.dob}</td>
              <td>{user.address}</td>
              <td>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Show the edit form if editingUser is not null */}
      {editingUser && (
        <div>
          <h3>Edit User</h3>
          <input
            type="text"
            value={editingUser.firstname}
            onChange={(e) => setEditingUser({ ...editingUser, firstname: e.target.value })}
          />
          <input
            type="text"
            value={editingUser.lastname}
            onChange={(e) => setEditingUser({ ...editingUser, lastname: e.target.value })}
          />
          <input
            type="text"
            value={editingUser.dob}
            onChange={(e) => setEditingUser({ ...editingUser, dob: e.target.value })}
          />
          <input
            type="text"
            value={editingUser.address}
            onChange={(e) => setEditingUser({ ...editingUser, address: e.target.value })}
          />
          <button onClick={handleUpdateItemDetails}>Save</button>
        </div>
      )}

    </div>
  );
};

export default UsersList;
