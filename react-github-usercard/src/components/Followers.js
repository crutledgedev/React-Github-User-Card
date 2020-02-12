import React from "react";
import FollowerCard from "./FollowerCard";


const Followers = ({ followers }) => {
  return (
    <div>
      {followers.map(follower => (
        <FollowerCard
          key={follower.id}
          url={follower.html_url}
          login={follower.login}
          avatar_url={follower.avatar_url}
        />
      ))}
    </div>
  );
}

export default Followers;