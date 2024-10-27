import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../Components/ErrorAlert';

const AuthForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    axios
      .post('http://localhost:5000/api/users/login', {
        body: {
          login: username,
          password: password,
        },
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        const message =
          error.response && error.response.data && typeof error.response.data === 'object'
            ? error.response.data.error // Попробуем получить error из объекта
            : 'Ошибка авторизации'; // Сообщение по умолчанию
        setErrorMessage(message);
        console.error('Ошибка авторизации:', message);
      });
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="flex items-center justify-center min-h-full bg-gradient-to-b ">
      <div className="w-full max-w-md p-8 bg-yellow-200 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <h2 className="text-3xl font-extrabold text-yellow-800 text-center mb-6">
          Добро пожаловать!
        </h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Имя пользователя или почта"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 bg-yellow-50 border border-yellow-400 rounded-full shadow focus:outline-none focus:border-yellow-600 transition-all duration-200"
          />
        </div>

        <div className="mb-8">
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-yellow-50 border border-yellow-400 rounded-full shadow focus:outline-none focus:border-yellow-600 transition-all duration-200"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-3 text-white bg-yellow-600 rounded-full shadow-lg hover:bg-yellow-700 hover:scale-105 transition-all duration-200 ease-in-out transform mb-4"
        >
          Войти
        </button>

        <button
          onClick={handleRegister}
          className="w-full py-3 text-yellow-800 bg-yellow-300 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-200 ease-in-out transform"
        >
          Регистрация
        </button>

        {errorMessage && (
        <ErrorAlert message={errorMessage} onClose={() => setErrorMessage('')} />
      )}
      </div>
    </div>
  );
};

export default AuthForm;
