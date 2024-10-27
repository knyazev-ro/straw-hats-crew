import React from "react";
import RegistrationForm from "../Auth/RegistrationForm"; // Импорт вашего компонента регистрации
import UserProfileCard from "../Users/UserProfileCard"; // Импорт вашего компонента профиля пользователя
import EditChallenge from "../Challenges/EditChallenge"; // Импорт вашего компонента редактирования челленджа
import EditTeam from "../Team/EditTeam"; // Импорт вашего компонента редактирования команды
import BigCalendar from "../Components/BigCalendar"; // Импорт вашего компонента календаря

const AdminPanel = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Админ Панель</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        
        {/* Компонент для регистрации пользователей */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Регистрация пользователя</h2>
          <RegistrationForm />
        </div>
        
        {/* Компонент профиля пользователя */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Профиль пользователя</h2>
          <UserProfileCard />
        </div>

        {/* Компонент редактирования челленджа */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Редактирование челленджа</h2>
          <EditChallenge />
        </div>
        
        {/* Компонент редактирования команды */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Редактирование команды</h2>
          <EditTeam />
        </div>
        
        {/* Компонент большого календаря */}
        <div className="bg-white shadow-md rounded-lg p-4 col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Календарь</h2>
          <BigCalendar />
        </div>
        
      </div>
    </div>
  );
};

export default AdminPanel;
