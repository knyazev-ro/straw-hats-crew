import React from 'react';

const TeamCard = ({ team }) => {
  const { name, lead, members, challenge, achievements } = team;

  return (
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
      <h2 className="text-1xl md:text-1xl font-extrabold text-gray-800 mb-4 text-center border-b-2 border-yellow-700 pb-2 uppercase tracking-widest">
        {name}
      </h2>

      <div className="text-sm text-gray-700 space-y-2">
        {/* Информация о лидере команды */}
        <div className="flex flex-wrap justify-between items-center">
          <span className="font-semibold text-gray-800">Лидер команды:</span>
          <span className="bg-yellow-200 py-1 px-2 rounded">{lead.username}</span>
        </div>

        {/* Участники команды */}
        {members && (
          <div className="mt-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Участники:</h3>
            <ul className="list-disc list-inside space-y-1">
              {members.map((member) => (
                <li key={member.id} className="px-2 text-white bg-black rounded-full">
                  {member.username}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Челлендж команды */}
        {challenge && (
          <div className="flex flex-wrap justify-between items-center mt-4">
            <span className="font-semibold text-gray-800">Челлендж:</span>
            <span className="bg-yellow-200 py-1 px-2 rounded">{challenge.name}</span>
          </div>
        )}

        {/* Достижения команды */}
        {achievements && achievements.length > 0 && (
          <div className="flex flex-wrap mt-4">
            <span className="font-semibold text-gray-800">Достижения:</span>
            <ul className="list-disc list-inside space-y-1 ml-2">
              {achievements.map((achievement) => (
                <li key={achievement.id} className="bg-yellow-50 text-black font-bold py-1 px-2 rounded-lg">
                  {achievement.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
