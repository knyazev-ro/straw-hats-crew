import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-yellow-500 text-black px-6 py-4 shadow-lg fixed w-full top-0 z-50">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-gray-800 hover:text-white hover:bg-yellow-600 transition px-4 py-2 rounded-lg"
      >
        <FaArrowLeft className="text-xl" />
        <span className="font-semibold">Back</span>
      </button>

      {/* Logo and Title */}
      <div className="flex items-center space-x-3">
        <img
          src="https://img.icons8.com/?size=100&id=toPAhRhOCl74&format=png&color=000000" // Укажите путь к вашему логотипу
          alt="Logo"
          className="w-12 h-12 rounded-full border-2 border-black"
        />
        <h1 className="text-2xl font-bold tracking-wider text-gray-900">STRAW-HATS-OGGETTO</h1>
      </div>

      {/* Empty space to balance layout */}
      <div className="w-20"></div>
    </header>
  );
};

export default Header;
