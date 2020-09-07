import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars0.githubusercontent.com/u/56772876?s=460&u=6db8922f7527c27677116e623e347d577d8f3de0&v=4"
        message="Wow i can't believe this works, that's wild"
        timestamp="45 minutes ago"
        username="Bionic Al"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmt1-YIC8f3mAp4DQp5KCd4pAvyo9trMgiuQ&usqp=CAU}"
      />
      <Post
        profilePic="https://avatars0.githubusercontent.com/u/56772876?s=460&u=6db8922f7527c27677116e623e347d577d8f3de0&v=4"
        message="Wow i can't believe this works, that's wild!!! yay"
        timestamp="45 minutes ago"
        username="Bionic Al"
        image=""
      />
      <Post
        profilePic="https://avatars0.githubusercontent.com/u/56772876?s=460&u=6db8922f7527c27677116e623e347d577d8f3de0&v=4"
        message="Wow i can't believe this works, that's wild. i hope everyone can see how cool this is and lets me work for their company. that would be gr8. hmu maybe we can grab some breakfast at dinner."
        timestamp="45 minutes ago"
        username="Bionic Al"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmt1-YIC8f3mAp4DQp5KCd4pAvyo9trMgiuQ&usqp=CAU}"
      />
    </div>
  );
}

export default Feed;
