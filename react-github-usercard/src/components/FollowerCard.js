import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const FollowerCard = (props) => {



  return (
    <div>
      <Card>
        <CardImg top width="25%" src={props.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>Username: {props.login}</CardTitle>
          <a href={props.url}>GitHub Repository</a>
        </CardBody>
      </Card>
    </div>
  );
};

export default FollowerCard;