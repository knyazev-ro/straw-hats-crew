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
    <div className="flex p-4 border-b border-gray-200 bg-yellow-300 hover:bg-yellow-200 transition duration-200 max-w-xl mx-auto rounded-xl">
      <div>
        {/* Аватар пользователя */}

        {/* Контент поста */}
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <div className="mr-4 flex-shrink-0">
              <img
                src={avatar || "https://via.placeholder.com/50"}
                alt={`${username}'s avatar`}
                className="w-12 h-12 rounded-full border border-gray-300"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mr-2">
              {username}
            </h4>
            <div className="flex gap-4 items-center">
              <span className="text-sm text-gray-500">
                @{username.toLowerCase()}
              </span>
            </div>
          </div>
          <span className="bg-lime-50 rounded-xl px-3 py-3 flex hover:rotate-1 hover:underline">
            {challenge}
          </span>
        </div>

        {/* Текст поста */}
        <p className="text-gray-700 mb-2 px-1 py-1">
          {displayedContent}
          {isLongContent && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-500 hover:underline ml-1"
            >
              {expanded ? "Свернуть" : "Показать больше"}
            </button>
          )}
        </p>

        {/* Изображение поста (если есть) */}
        {image && (
          <div className="mt-2 rounded-lg overflow-hidden">
            <img
              src={image}
              alt="Post content"
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Компонент голосования */}
        {voteOptions && <VoteCard options={voteOptions} />}
      </div>
    </div>
  );
};

export default PostCard;
