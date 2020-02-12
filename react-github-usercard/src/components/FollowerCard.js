import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const FollowerCard = (props) => {



  return (
    <div>
      <Card>
        <CardImg top width="25%" src={props.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.login}</CardTitle>
          <a href={props.url}>GitHub Repository</a>
        </CardBody>
      </Card>
    </div>
  );
};

export default FollowerCard;