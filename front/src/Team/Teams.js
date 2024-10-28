import React from 'react';
import TeamCard from './TeamCard';

const Teams = ({ teams }) => {
  return (
    <div className="flex flex-wrap gap-6 px-4">
      {teams.map((team) => (
        <a href={team.id ? `/team/${team.id}/users` : ''}>
        <TeamCard key={team.id} team={team} />
        </a>
      ))}
    </div>
  );
};

export default Teams;
