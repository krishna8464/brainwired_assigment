// 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import fetchUsers from "./UsersList"
import "./table.css"

const AddEditUserForm = ({ userToEdit, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    address: '',
  });

  useEffect(() => {
    if (userToEdit) {
      setFormData({
        firstname: userToEdit.firstname,
        lastname: userToEdit.lastname,
        dob: userToEdit.dob,
        address: userToEdit.address,
      });
    }
  }, [userToEdit]);

  const handleAddUser = async () => {
    try {
      await axios.post('https://brinewried.onrender.com/user/create', formData);
      onSubmitSuccess();
      window.location.reload()
      alert("user created successfully")

    } catch (error) {
        // alert("User alredy exist")
      console.error('Error adding user:', error);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userToEdit) {
    //   handleUpdateUser();
    } else {
      handleAddUser();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstname}
        onChange={(e) =>
          setFormData({ ...formData, firstname: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastname}
        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
      />
      <input
        type="Date"
        placeholder="Date of Birth"
        value={formData.dob}
        onChange={(e) =>
          setFormData({ ...formData, dob: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <button type="submit">{userToEdit ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default AddEditUserForm;
