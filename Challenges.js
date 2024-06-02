import React, { useEffect, useState } from 'react';
import { fetchChallenges } from '../services/api';
import ChallengeCard from '../components/ChallengeCard';

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetchChallenges().then(response => setChallenges(response.data));
  }, []);

  return (
    <div className="challenges">
      <h2>Challenges</h2>
      {challenges.map(challenge => (
        <ChallengeCard key={challenge._id} challenge={challenge} />
      ))}
    </div>
  );
};

export default Challenges;
