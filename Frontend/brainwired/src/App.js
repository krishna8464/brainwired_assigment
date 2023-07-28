// src/App.js
import React, { useState } from 'react';
import UsersList from './components/UsersList';
import AddEditUserForm from './components/AddEditUserForm';
import "./App.css"

const App = () => {
  const [editingUser, setEditingUser] = useState(null);

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleEditSuccess = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <h1 id='heading'>Welcome</h1>
      <AddEditUserForm
        userToEdit={editingUser}
        onSubmitSuccess={handleEditSuccess}
      />
      <UsersList onEditUser={handleEditUser} />
    </div>
  );
};

export default App;
