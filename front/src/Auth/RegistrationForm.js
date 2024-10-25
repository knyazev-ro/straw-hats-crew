import React, { useState } from 'react';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Логика регистрации
    console.log('Registering with:', { firstName, lastName, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <div className="w-full max-w-md p-6 bg-yellow-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-yellow-800 text-center mb-4">Регистрация</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Имя"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 bg-yellow-50 border border-yellow-300 rounded focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Фамилия"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-2 bg-yellow-50 border border-yellow-300 rounded focus:outline-none focus:border-yellow-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleRegister}
          className="w-full py-2 text-white bg-yellow-600 hover:bg-yellow-700 rounded"
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
