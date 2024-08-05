import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import { fetchUsers } from '../api';

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      const new_users = await fetchUsers()
      setUsers(new_users.data)
    }
    fetchData()
  }, []);

  return (
    <div>
      <h1>Welcome to the User Management App</h1>
      <UserList users={users} />
    </div>
  );
};

export default Home;
