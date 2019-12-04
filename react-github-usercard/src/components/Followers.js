import React from "react";
import FollowerCard from "./FollowerCard";


function Followers({ followers }) {
  return (
    <div>
      {followers.map(follower => (
        <FollowerCard
          key={follower.id}
          name={follower.name}
          login={follower.login}
          avatar_url={follower.avatar_url}
        />
      ))}
    </div>
  );
}

export default Followers;