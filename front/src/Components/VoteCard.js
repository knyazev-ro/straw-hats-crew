import React, { useState } from 'react';

const VoteCard = ({ options }) => {
    // Инициализация состояния голосов для каждого варианта
    const [votes, setVotes] = useState(options.map(() => 0));
  
    // Обработчик голосования за вариант
    const handleVote = (index) => {
      setVotes((prevVotes) => {
        const newVotes = [...prevVotes];
        newVotes[index] += 1;
        return newVotes;
      });
    };
  
    return (
      <div className="mt-2 space-y-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <button
              onClick={() => handleVote(index)}
              className="flex-1 bg-orange-100 text-black p-2 rounded-lg hover:bg-yellow-400 transition "
            >
              {option} {/* Название варианта */}
            </button>
            <span className="text-gray-700 font-medium">
              {votes[index]} голосов
            </span>
          </div>
        ))}
      </div>
    );
  };

export default VoteCard;
