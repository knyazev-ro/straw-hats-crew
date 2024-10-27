import React, { useEffect } from 'react';
import { FaExclamationCircle } from 'react-icons/fa'; // Иконка для ошибки

const ErrorAlert = ({ message, onClose }) => {
  useEffect(() => {
    // Таймер для автоматического скрытия сообщения об ошибке
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 opacity-90 transition-transform duration-300 ease-in-out">
      <FaExclamationCircle className="text-white text-lg" />
      <p className="font-semibold">{message}</p>
    </div>
  );
};

export default ErrorAlert;
