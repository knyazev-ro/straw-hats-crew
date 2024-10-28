import React, { useState } from "react";
import PostCard from "../Components/PostCard";
import BigCalendar from "../Components/BigCalendar";
import AboutCard from "../Users/AboutCard";
import SmallChallenges from "../Challenges/SmallChallenges";
import SmallTeams from "../Team/SmallTeams";
import { useSearchParams } from "react-router-dom";
import axios from "axios";


const MainFeed = ({ posts }) => {
  const url ="http://localhost:5000";
  const [events, setEvents] = useState([]);
  //Для создания
  // axios.get(url+'/api/challenges/create')

const fetchCalendarEvents = async (user_id) => {
  const calendarEvents = await axios.get(url+`/api/calendar/${user_id}index`);
  setEvents(calendarEvents);
}

// const fetch

  const userData = {
    profilePic: "https://yastatic.net/naydex/yandex-search/FkiTn7055/9c341eeJWwU4/g7rYLXO8QsErVPVOMip37f-uUX3J-mSZ3c8Zze9w50xEiC8AqDl0CcbFWhxmu5bg-yJ4RWusKgguoRXgLl4122EI2x5krmGijcf3v0J6xilOyuEYannA",
    firstName: "Иван",
    lastName: "Муромец",
    email: "ivanov@example.com",
    username: "ivanov",
    bio: "Немного обо мне...",
  };
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
      id: 1,
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
  
  //Для редактирования
  return (
    <div className="bg-yellow-50 min-h-screen py-8 flex justify-center gap-2">
       <AboutCard user={userData}/>
      <div className="flex flex-col-reverse">
      {/* <SmallTeams teams={teamsData}/> */}
     <SmallChallenges challenges={challenges}/>
      <BigCalendar/>
      </div>
      
      <div className="w-full max-w-2xl space-y-6">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            avatar={post.avatar}
            username={post.username}
            content={post.content}
            image={post.image}
            voteOptions={post.voteOptions}
            challenge={post.challenge}
          />
        ))}
      </div>
    </div>
  );
};

export default MainFeed;
