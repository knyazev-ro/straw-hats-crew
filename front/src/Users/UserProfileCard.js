import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfileCard = () => {

  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState('');
  const [firstName, setFirstName] = useState('Иван');
  const [lastName, setLastName] = useState('Иванов');
  const [email, setEmail] = useState('ivanov@example.com');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('ivanov');
  const [bio, setBio] = useState('Немного обо мне...');



  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSave = ()=> {
    axios
      .post('http://localhost:5000/api/users/create', {
        body: {
          login: username,
          password: password,
          name: firstName,
          last_name: lastName, 
          email: email, 
          bio:bio,
          profilePic:profilePic,
          

        },
      })
      .then((response) => {
        navigate('/users/create')
        console.log(response.data.message);
      })
      .catch((error) => {
        const message =
          error.response && error.response.data && typeof error.response.data === 'object'
            ? error.response.data.error // Попробуем получить error из объекта
            : 'Ошибка авторизации'; // Сообщение по умолчанию
        console.error('Ошибка авторизации:', message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        {/* Фото профиля */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32">
            <img
              src={profilePic || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-yellow-400 shadow-lg"
            />
            <input
              type="file"
              onChange={handleProfilePicChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
              title="Изменить фото"
            />
          </div>
        </div>

        {/* Поля профиля */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600">Имя</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">Фамилия</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">Почта</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">Логин</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600">О себе</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows="3"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-yellow-200 focus:outline-none"
            />
          </div>
        </div>

        <button className="mt-6 w-full py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 transition duration-300">
          Сохранить изменения
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
