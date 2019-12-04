import React from "react";

function FollowerCard(props) {
  return (
    <div>
      <img src={props.avatar_url}></img>
      <h3>Username: {props.login}</h3>
    </div>
  );
}

export default FollowerCard;