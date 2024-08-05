import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <Link to={`/users/edit/${user.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/users/create">Create New User</Link>
    </div>
  );
};

export default UserList;
