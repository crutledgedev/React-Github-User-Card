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
          <CardTitle>Username: {props.login}</CardTitle>
          <Button>GitHub Repository</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default FollowerCard;