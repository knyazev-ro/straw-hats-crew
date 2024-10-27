import React from 'react';
import TeamCard from './TeamCard';

const SmallTeams = ({ teams }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-yellow-50">
      {teams.map((team) => (
        <a href={team.id ? `/team/${team.id}/posts` : ''}>
        <TeamCard key={team.id} team={team} />
        </a>
      ))}
    </div>
  );
};

export default SmallTeams;
