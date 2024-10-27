import React, { useState } from "react";
import VoteCard from "./VoteCard"; // Импорт компонента голосования

const PostCard = ({
  key,
  avatar,
  username,
  content,
  image,
  voteOptions,
  challenge,
}) => {
  const [expanded, setExpanded] = useState(false);

  // Условие для сворачивания текста
  const isLongContent = content.length > 120;
  const displayedContent =
    isLongContent && !expanded ? content.slice(0, 120) + "..." : content;

  return (
    <div className="flex p-6 bg-yellow-300 shadow-xl transform hover:-translate-y-1 transition-all duration-300 max-w-2xl mx-auto rounded-2xl border border-yellow-400">
      <div className="flex-shrink-0 mr-4">
        {/* Аватар пользователя */}
        <img
          src={avatar || "https://via.placeholder.com/50"}
          alt={`${username}'s avatar`}
          className="w-16 h-16 rounded-full border-2 border-yellow-400 shadow-lg"
        />
      </div>
      <div className="flex-1">
        {/* Заголовок поста */}
        <div className="flex items-center mb-2">
          <h4 className="text-lg font-semibold text-yellow-800 mr-2">
            {username}
          </h4>
          <span className="text-sm text-yellow-600">@{username.toLowerCase()}</span>
        </div>
        
        {/* Тема челленджа */}
        <span className="bg-yellow-100 text-yellow-700 text-sm font-medium px-3 py-1 rounded-xl inline-block mb-3 shadow-sm hover:bg-yellow-200 transition-colors duration-200">
          {challenge}
        </span>

        {/* Текст поста */}
        <p className="text-gray-800 mb-3">
          {displayedContent}
          {isLongContent && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-yellow-600 font-semibold hover:underline ml-1 transition-colors duration-200"
            >
              {expanded ? "Свернуть" : "Читать далее"}
            </button>
          )}
        </p>

        {/* Изображение поста (если есть) */}
        {image && (
          <div className="mt-4 rounded-xl overflow-hidden shadow-lg">
            <img
              src={image}
              alt="Post content"
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Компонент голосования */}
        {voteOptions && (
          <div className="mt-4">
            <VoteCard options={voteOptions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
