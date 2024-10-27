import React from 'react';

const ChallengeCard = ({ challenge }) => {
  const { name, description, startDate, endDate, type, teams, achivement } = challenge;

  return (
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
      <h2 className="text-1xl md:text-1xl font-extrabold text-gray-800 mb-4 text-center border-b-2 border-yellow-700 pb-2 uppercase tracking-widest">
        {name}
      </h2>

      <p className="text-lg text-gray-900 font-semibold mb-4 text-center">{description}</p>

      <div className="text-sm text-gray-700 space-y-2">
        <div className="flex flex-wrap justify-between items-center">
          <span className="font-semibold text-gray-800">Дата начала:</span>
          <span className="bg-yellow-200 py-1 px-2 rounded">{new Date(startDate).toLocaleDateString()}</span>
        </div>

        <div className="flex flex-wrap justify-between items-center">
          <span className="font-semibold text-gray-800">Дата окончания:</span>
          <span className="bg-yellow-200 py-1 px-2 rounded">{new Date(endDate).toLocaleDateString()}</span>
        </div>

        <div className="flex flex-wrap justify-between items-center">
          <span className="font-semibold text-gray-800">Тип:</span>
          <span className={`py-1 px-2 rounded ${
            type === 'INDIVIDUAL' ? 'bg-yellow-300 text-yellow-800' : 'bg-yellow-500 text-white'
          }`}>
            {type === 'INDIVIDUAL' ? 'Индивидуальный' : 'Командный'}
          </span>
        </div>
        {teams &&
                <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Команды:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {teams.map((team) => (
                    <li key={team.id} className="px-2 text-white bg-black rounded-full">
                      {team.name}
                    </li>
                  ))}
                </ul>
              </div> }

        <div className=" flex flex-wrap mt-4">
          <span className="font-semibold text-gray-800">Достижение:</span>
          <span className="bg-yellow-50 text-black font-bold py-1 px-2 ml-2 rounded-lg">
            {achivement.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
