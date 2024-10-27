import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="">
    <footer className="flex flex-col items-center justify-between bg-yellow-500 text-black px-6 py-4 shadow-lg w-full bottom-0">
      {/* Социальные сети */}
      <div className="flex space-x-6 my-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-white hover:bg-yellow-600 transition p-2 rounded-full">
          <FaFacebook className="text-2xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-white hover:bg-yellow-600 transition p-2 rounded-full">
          <FaTwitter className="text-2xl" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-white hover:bg-yellow-600 transition p-2 rounded-full">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-white hover:bg-yellow-600 transition p-2 rounded-full">
          <FaLinkedin className="text-2xl" />
        </a>
      </div>

      {/* Информация о праве */}
      <div className="text-center text-gray-900 font-medium my-2">
        <p>© 2024 STRAW-HATS-OGGETTO. Все права защищены, наверно.</p>
      </div>

      {/* Контактная информация */}
      <div className="text-center text-gray-800 my-2">
        <p>Email: <a href="mailto:info@strawhats.com" className="font-semibold text-gray-900 hover:underline">info@strawhats.com</a></p>
        <p>Телефон: <a href="tel:+123456789" className="font-semibold text-gray-900 hover:underline">+1 (234) 567-89</a></p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
