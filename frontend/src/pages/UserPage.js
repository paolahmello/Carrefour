import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {editingUser ? (
        <UserForm user={editingUser} onSave={() => setEditingUser(null)} />
      ) : (
        <UserList users={users} />
      )}
    </div>
  );
};

export default UserPage;
