import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(response => setUsers(response.data));
  }, []);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name}: {user.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
