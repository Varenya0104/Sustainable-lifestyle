import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Sustainable Lifestyle Challenge App</h1>
      <Link to="/challenges">View Challenges</Link>
      <Link to="/leaderboard">View Leaderboard</Link>
      <Link to="/profile">Your Profile</Link>
    </div>
  );
};

export default Home;
