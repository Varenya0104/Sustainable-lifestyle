import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <p>Points: {user.points}</p>
      <h3>Completed Challenges:</h3>
      <ul>
        {user.completedChallenges.map(challenge => (
          <li key={challenge._id}>{challenge.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
