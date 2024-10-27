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


function App() {

  
  
  const posts = [
    {
      avatar: 'https://via.placeholder.com/50',
      username: 'johndoe',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: 'https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?t=st=1729997770~exp=1730001370~hmac=97faad179b4aa270fb5737e8e8c8f65fd03fb2c274eae84c80ab1ff5ef9c73f2&w=996',
      voteOptions: ["Синий", "Зелёный", "Красный", "Желтый"],
      challenge: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      name: "Челлендж 1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
      startDate: "2024-11-01",
      endDate: "2024-11-15",
      type: "INDIVIDUAL",
      teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Главный прогульщик" },
    },
    {
      id: 2,
      name: "Челлендж 2",
      description: "Всякое бла бла бла",
      startDate: "2024-11-02",
      endDate: "2024-11-07",
      type: "TEAM",
      teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Хокаге" },
    },
    {
      id: 3,
      name: "Америка сосать",
      description: "Всякое бла бла бла",
      startDate: "2024-11-02",
      endDate: "2024-11-07",
      type: "TEAM",
      // teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Будущий Король Пиратов!" },
    },
    {
      id: 1,
      name: "Челлендж 1",
      description: "Описание челленджа 1",
      startDate: "2024-11-01",
      endDate: "2024-11-15",
      type: "INDIVIDUAL",
      teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Достижение 1" },
    },
    // Другие челленджи
  ];
  
  const location = useLocation();

  // Скрыть Header на страницах AuthForm и RegistrationForm
  const hideHeader = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
    {!hideHeader && <Header />}
    <div className='py-24'>

    <Routes>
    <Route path="/" element={<Challenges challenges={challenges} />} />
      <Route path="/login" element={<AuthForm />} />
      <Route path="/register" element={<RegistrationForm />} />
       <Route path="/users" element={<UserProfileCard/>}/>
       {/* Профили динамично */}

      <Route path="/feed" element={<MainFeed posts={posts}/>}/>

      <Route path="/challenge/:id/posts" element={<ChallengePosts/>}/>
      <Route path="/challenge/:id/edit" element={<EditChallenge/>}/>
      <Route path="/challenge/create" element={<EditChallenge/>}/>

      <Route path="/callendar" element={<BigCalendar events={events}/>}/>

      <Route path="/team/create" element={<EditTeam/>}/>
      <Route path="/team/:id/edit" element={<EditTeam/>}/>

      <Route path="" element={""}/>
    </Routes>
    </div>
    {!hideHeader && <Footer />}
  </>
  );
}

export default App;
