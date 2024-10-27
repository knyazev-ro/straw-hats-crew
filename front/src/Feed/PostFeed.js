import React from "react";
import PostCard from "../Components/PostCard";

const PostFeed = ({ posts }) => {
  //Для создания
  // axios.get('http://localhost:5000/api/challenges/create')

  //Для редактирования
  return (
    <div className="bg-yellow-50 min-h-screen py-8 flex justify-center">
      
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
