import React from "react";

const AboutCard = ({ user }) => {
  const {
    profilePic = "https://via.placeholder.com/150", // Заполнитель для изображения
    firstName = "Имя",
    lastName = "Фамилия",
    email = "email@example.com",
    username = "username",
    bio = "Немного обо мне...",
  } = user;

  return (
    <div className="max-w-xs mx-auto bg-black shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
      {/* Изображение профиля */}
      <div className="p-4">
        <img
          src={profilePic}
          alt={`${firstName} ${lastName}`}
          className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-500 object-cover"
        />
      </div>

      {/* Информация о профиле */}
      <div className="text-center px-6 pb-4">
        <h3 className="text-xl font-bold text-yellow-400">{firstName} {lastName}</h3>
        <p className="text-sm text-yellow-300 mb-2">@{username}</p>
        
        <p className="text-yellow-200 text-sm">{bio}</p>
      </div>

      {/* Контактная информация */}
      <div className="bg-yellow-500 px-6 py-4 border-t border-yellow-400">
        <p className="text-sm text-black">
          📧 <span className="font-semibold">{email}</span>
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
