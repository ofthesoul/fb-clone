import React from "react";
import "./StoryReel.css";
import Story from "./Story.js";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.redd.it/yvqsf2xja6601.jpg"
        profileSrc="https://avatars0.githubusercontent.com/u/56772876?s=460&u=6db8922f7527c27677116e623e347d577d8f3de0&v=4"
        title="Bionic Al"
      />
      <Story
        image="https://preview.redd.it/0utev40vord41.jpg?width=1173&format=pjpg&auto=webp&s=f62422e01fb812cbd8ff14329175c0e34e01e92f"
        profileSrc="https://img.discogs.com/snt-KWot51mTCrXYYe5Sw0wvHyk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-3302354-1493399879-5489.jpeg.jpg"
        title="Iroquois Pliskin"
      />
      <Story
        image="https://nationaltoday.com/wp-content/uploads/2019/01/museum-selfie-day.jpg"
        profileSrc="https://trd.by/incoming/article16197907.ece/u6yzsq/ALTERNATES/w980-square/363424883.jpg"
        title="Meryl Silverburgh"
      />
      <Story
        image="https://vr-photographer.com/wp-content/uploads/2018/05/Set-Up-A-Photography-Studio.jpg"
        profileSrc="https://www.uncut.co.uk/wp-content/uploads/2015/02/editors2tomsmith130607w.jpg"
        title="Major Tom"
      />
    </div>
  );
}

export default StoryReel;
