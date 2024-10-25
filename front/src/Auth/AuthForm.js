import React, { useState } from 'react';
import axios  from 'axios'

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Логика авторизации
    axios.get('/login', {
      email: username,
      password: password,
    })
  };

  const handleRegister = () => {
    // Логика регистрации
    console.log('Navigating to register');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <div className="w-full max-w-xs p-6 bg-yellow-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-yellow-800 text-center mb-4">Вход</h2>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Имя пользователя или почта"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 bg-yellow-50 border border-yellow-300 rounded focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-yellow-50 border border-yellow-300 rounded focus:outline-none focus:border-yellow-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-2 mb-4 text-white bg-yellow-600 hover:bg-yellow-700 rounded"
        >
          Войти
        </button>

        <button
          onClick={handleRegister}
          className="w-full py-2 mb-2 text-yellow-800 bg-yellow-300 hover:bg-yellow-400 rounded"
        >
          Регистрация
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
