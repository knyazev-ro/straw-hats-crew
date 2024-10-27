import React from "react";
import PostCard from "../Components/PostCard";
import BigCalendar from "../Components/BigCalendar";
import AboutCard from "../Users/AboutCard";
import SmallChallenges from "../Challenges/SmallChallenges";

const MainFeed = ({ posts }) => {
  //Для создания
  // axios.get('http://localhost:5000/api/challenges/create')
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
      description: "Всякое бла бла бла",
      startDate: "2024-11-02",
      endDate: "2024-11-07",
      type: "TEAM",
      teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Хокаге" },
    },
    {
      id: 3,
      name: "Утренник",
      description: "Всякое бла бла бла",
      startDate: "2024-11-02",
      endDate: "2024-11-07",
      type: "TEAM",
      // teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Будущий Король Пиратов!" },
    },
    {
      id: 1,
      name: "Корпоратив",
      description: "Описание челленджа 1",
      startDate: "2024-11-01",
      endDate: "2024-11-15",
      type: "INDIVIDUAL",
      teams: [{ id: 1, name: "Команда 1" }, { id: 2, name: "Команда 2" }],
      achivement: { id: 1, name: "Достижение 1" },
    },
    // Другие челленджи
  ];
  
  //Для редактирования
  return (
    <div className="bg-yellow-50 min-h-screen py-8 flex justify-center gap-2">
       <AboutCard user={userData}/>
      <div className="flex flex-col-reverse">
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
