import './App.css';
import RegistrationForm from './Auth/RegistrationForm';
import UserProfileCard from './Users/UserProfileCard';
import PostFeed from './Feed/PostFeed';
import BigCalendar from './Components/BigCalendar';
import EditChallenge from './Challenges/EditChallenge';
import Challenges from './Challenges/Challenges';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';
import AuthForm from './Auth/AuthForm';
import Header from './Header';
import ChallengePosts from './Challenges/ChallengePosts';
import EditTeam from './Team/EditTeam';
import Footer from './Footer';
import MainFeed from './Feed/MainFeed';
import AdminPanel from './Admin/AdminPanel';
import TeamCard from './Team/TeamCard';
import Teams from './Team/Teams';


function App() {

  
  
  const posts = [
    {
      avatar: 'https://via.placeholder.com/50',
      username: 'johndoe',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: 'https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?t=st=1729997770~exp=1730001370~hmac=97faad179b4aa270fb5737e8e8c8f65fd03fb2c274eae84c80ab1ff5ef9c73f2&w=996',
      voteOptions: ["Синий", "Зелёный", "Красный", "Желтый"],
      challenge: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      avatar: 'https://via.placeholder.com/50',
      username: 'janedoe',
      content: 'Планирую отдых на даче',
      image: 'https://img.freepik.com/free-photo/view-woman-working-agricultural-sector-celebrate-labour-day-women_23-2151252018.jpg?t=st=1729997961~exp=1730001561~hmac=ccf16f8eee79da1468de53b65caee0dff90670c6fdaf0a2382365bb9a77c4dd2&w=900',
      challenge: 'Отдых с пользой',
    },
    {
      avatar: 'https://via.placeholder.com/50',
      username: 'jadensmith',
      content: 'Планирую заняться утренней зарядкой!',
      // image: 'https://via.placeholder.com/50',
      challenge: 'Утренняя зарядка каждый день',
    },
    // другие посты...
  ];
  
  const events = [
    { date: '2024-11-04', title: 'День рождения друга', description: 'Отмечаем в кафе' },
    { date: '2024-11-10', title: 'Встреча с командой', description: 'Рабочая встреча по проекту' },
    { date: '2024-11-21', title: 'Концерт', description: 'Выступление любимой группы' },
    // другие события...
  ];
  
  const achievements = [
    {id:1 , title: "GOOD BOY"},
    {id:2 , title: "CRAZY DUDE"},
    {id:2 , title: "CHILL GIRL"},
  ];
  
  const challengeTypes =[
    {id:1 , title: "Одиночное"},
    {id:2 , title: "Командное"},
    {id:2 , title: "Семейное"},
  ];
  
  const challenges = [
    {
      id: 1,
      name: "Фото со своим питомцем",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
      startDate: "2024-11-01",
      endDate: "2024-11-15",
      type: "INDIVIDUAL",
      teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Главный прогульщик" },
    },
    {
      id: 2,
      name: "Волонтерство на Большой Садовой",
      description: "Помощь на ул. Большая Садовая",
      startDate: "2024-11-02",
      endDate: "2024-11-07",
      type: "TEAM",
      teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Хокаге" },
    },
    {
      id: 3,
      name: "Утренняя рутина",
      description: "Утро, кофе, обязанности",
      startDate: "2024-11-02",
      endDate: "2024-11-07",
      type: "TEAM",
      // teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Будущий Король Пиратов!" },
    },
    {
      id: 4,
      name: "Киновечер",
      description: "Помогите в планировке будущего корпоратива",
      startDate: "2024-11-01",
      endDate: "2024-11-15",
      type: "INDIVIDUAL",
      teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Царь горы" },
    },
    {
      id: 5,
      name: "Корпоратив",
      description: "Помогите в планировке будущего корпоратива",
      startDate: "2024-11-01",
      endDate: "2024-11-15",
      type: "INDIVIDUAL",
      teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Царь горы" },
    },
    {
      id: 6,
      name: "Корпоратив",
      description: "Помогите в планировке будущего корпоратива",
      startDate: "2024-11-01",
      endDate: "2024-11-15",
      type: "INDIVIDUAL",
      teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Царь горы" },
    },
    {
      id: 5,
      name: "Корпоратив",
      description: "Помогите в планировке будущего корпоратива",
      startDate: "2024-11-01",
      endDate: "2024-11-15",
      type: "INDIVIDUAL",
      teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Царь горы" },
    },
    {
      id: 6,
      name: "Корпоратив",
      description: "Помогите в планировке будущего корпоратива",
      startDate: "2024-11-01",
      endDate: "2024-11-15",
      type: "INDIVIDUAL",
      teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Царь горы" },
    },
    // Другие челленджи
  ];

  const teamsData = [
    {
      id: 1,
      name: "Команда A",
      lead: {
        id: 1,
        username: "ivanov",
      },
      members: [
        { id: 2, username: "petrov" },
        { id: 3, username: "sidorov" },
        { id: 4, username: "smirnov" },
      ],
      challenge: {
        id: 5,
        name: "Челлендж по программированию",
      },
      achievements: [
        { id: 6, name: "Первое место на соревнованиях" },
        { id: 7, name: "Лучший проект" },
      ],
    },
    {
      id: 2,
      name: "Команда B",
      lead: {
        id: 8,
        username: "mikhailov",
      },
      members: [
        { id: 9, username: "kuznetsov" },
        { id: 10, username: "stepanova" },
        { id: 11, username: "belyakov" },
      ],
      challenge: {
        id: 12,
        name: "Хакатон 2024",
      },
      achievements: [
        { id: 13, name: "Лучший дизайнерский проект" },
      ],
    },
    {
      id: 3,
      name: "Команда C",
      lead: {
        id: 14,
        username: "orlov",
      },
      members: [
        { id: 15, username: "ivanov" },
        { id: 16, username: "nikolaev" },
        { id: 17, username: "dmitriev" },
      ],
      challenge: {
        id: 18,
        name: "Челлендж по анализу данных",
      },
      achievements: [
        { id: 19, name: "Самый креативный подход" },
        { id: 20, name: "Лучший аналитический отчет" },
      ],
    },
    {
      id: 4,
      name: "Команда D",
      lead: {
        id: 21,
        username: "petrovich",
      },
      members: [
        { id: 22, username: "sergeev" },
        { id: 23, username: "fedorov" },
      ],
      challenge: {
        id: 24,
        name: "Соревнование по веб-разработке",
      },
      achievements: [],
    },
  ];

  const location = useLocation();

  // Скрыть Header на страницах AuthForm и RegistrationForm
  const hideHeader = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
    {!hideHeader && <Header />}
    <div className='py-24'>

    <Routes>
    <Route path="/challenge" element={<Challenges challenges={challenges} />} />
      <Route path="/login" element={<AuthForm />} />
      <Route path="/register" element={<RegistrationForm />} />
       <Route path="/users/create" element={<UserProfileCard/>}/>
       {/* Профили динамично */}

      <Route path="/" element={<MainFeed posts={posts}/>}/>

      <Route path="/challenge/:id/posts" element={<ChallengePosts/>}/>
      <Route path="/challenge/:id/edit" element={<EditChallenge/>}/>
      <Route path="/challenge/create" element={<EditChallenge/>}/>

      <Route path="/callendar" element={<BigCalendar events={events}/>}/>

      <Route path="/teams" element={<Teams teams={teamsData}/>}/>
      <Route path="/team/create" element={<EditTeam/>}/>
      <Route path="/team/:id/edit" element={<EditTeam/>}/>

      <Route path="/admin" element={<AdminPanel/>}/>
    </Routes>
    </div>
    {!hideHeader && <Footer />}
  </>
  );
}

export default App;
