import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth from './Auth/AuthForm';
import RegistrationForm from './Auth/RegistrationForm';
import UserProfileCard from './Users/UserProfileCard';
import Post from './Components/PostCard'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth />
    {/* <RegistrationForm/> */}
    {/* <UserProfileCard/> */}
    {/* <Post
        avatar="https://via.placeholder.com/50"
        username="IvanIvanov"
        content="Пример текста поста, который может быть длинным. Если текст длинный, то можно будет нажать кнопку 'Показать больше', чтобы увидеть его полностью."
        image="https://via.placeholder.com/300"
      /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
