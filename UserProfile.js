import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../services/api';
import Profile from '../components/Profile';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsers().then(response => setUser(response.data[0])); // Assume first user for now
  }, []);

  return (
    <div className="user-profile">
      {user ? <Profile user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default UserProfile;
