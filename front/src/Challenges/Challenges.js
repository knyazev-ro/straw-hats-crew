import React from 'react';
import ChallengeCard from './ChallengeCard';

const Challenges = ({ challenges }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-yellow-50">
      {challenges.map((challenge) => (
        <a href='/challenge/1/posts'>
        <ChallengeCard key={challenge.id} challenge={challenge} />
        </a>
      ))}
    </div>
  );
};

export default Challenges;
