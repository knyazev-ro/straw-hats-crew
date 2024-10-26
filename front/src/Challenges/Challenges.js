import React from 'react';
import ChallengeCard from './ChallengeCard';

const Challenges = ({ challenges }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-yellow-50">
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
};

export default Challenges;
