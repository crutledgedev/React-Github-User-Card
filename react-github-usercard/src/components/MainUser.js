import React from "react";


function MainUser({ mainUser }) {
  return (
    <div>
      <img src={mainUser.avatar_url} />
      <div>
        <h3>{mainUser.name}</h3>
        <p>Username: {mainUser.login}</p>
        <p>Location: {mainUser.location}</p>
        <p>Followers: {mainUser.followers}</p>
        <p>Following: {mainUser.following}</p>
        <a href={mainUser.html_url}>Git Hub</a>
      </div>
    </div>
  );
}

export default MainUser;