import React from 'react';
import ChallengeCard from './ChallengeCard';

const Challenges = ({ challenges }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-yellow-50">
      {challenges.map((challenge) => (
        <a href={challenge.id ? `/challenge/${challenge.id}/posts` : ''}>
        <ChallengeCard key={challenge.id} challenge={challenge} />
        </a>
      ))}
    </div>
  );
};

export default Challenges;
