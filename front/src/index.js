import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth from './Auth/AuthForm';
import RegistrationForm from './Auth/RegistrationForm';
import UserProfileCard from './Users/UserProfileCard';
import PostCard from './Components/PostCard'; 
import PostFeed from './Feed/PostFeed';


const posts = [
  {
    avatar: 'https://via.placeholder.com/50',
    username: 'johndoe',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: 'https://via.placeholder.com/50',
    voteOptions: ["Синий", "Зелёный", "Красный", "Желтый"],
    challenge: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    avatar: 'https://via.placeholder.com/50',
    username: 'janedoe',
    content: 'Новая идея для проекта!',
    image: 'https://via.placeholder.com/50',
    challenge: 'Быть богатым',
  },
  {
    avatar: 'https://via.placeholder.com/50',
    username: 'jaden smith',
    content: 'Some fucking shit!',
    image: 'https://via.placeholder.com/50',
    challenge: 'be dead at 60 years old',
  },
  // другие посты...
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Auth /> */}
    {/* <RegistrationForm/> */}
    {/* <UserProfileCard/> */}
  <PostFeed posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
