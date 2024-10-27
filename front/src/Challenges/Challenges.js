import React from 'react';
import ChallengeCard from './ChallengeCard';

const Challenges = ({ challenges }) => {
  return (
    <div className="flex flex-wrap gap-6 px-4">
      {challenges.map((challenge) => (
        <a href={challenge.id ? `/challenge/${challenge.id}/posts` : ''}>
        <ChallengeCard key={challenge.id} challenge={challenge} />
        </a>
      ))}
    </div>
  );
};

export default Challenges;
