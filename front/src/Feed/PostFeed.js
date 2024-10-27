import React from "react";
import PostCard from "../Components/PostCard";
import BigCalendar from "../Components/BigCalendar";
import AboutCard from "../Users/AboutCard";

const PostFeed = ({ posts }) => {
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
  //Для редактирования
  return (
    <div className="bg-yellow-50 min-h-screen py-8 flex justify-center gap-4">
      <div className="flex gap-2">
      <AboutCard user={userData}/>
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

export default PostFeed;
