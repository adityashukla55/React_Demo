import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class PeopleCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, name, short, date } = this.props.pers;
    let { key, value } = this.props.per;

    return (
      <div style={{display: 'flex', alignItems:'center'}}>
        <Card>
          <CardImg top width="100%" src="https://sanalytica-assets.storage.googleapis.com/assets/markers/246_Selenium/icon.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{short}</CardSubtitle>
            <CardText>{key}</CardText>
            
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default PeopleCard;
