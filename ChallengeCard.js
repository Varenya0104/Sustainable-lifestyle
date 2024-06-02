import React from 'react';

const ChallengeCard = ({ challenge }) => {
  return (
    <div className="challenge-card">
      <h3>{challenge.title}</h3>
      <p>{challenge.description}</p>
      <ul>
        {challenge.tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
      <p>Points: {challenge.points}</p>
    </div>
  );
};

export default ChallengeCard;
