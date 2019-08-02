import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';

class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
    }
  }

  componentDidMount() {

    fetch('http://localhost:3000/markers')
       .then(res => res.json())
       .then(json => {
         this.setState({
             isLoaded:true,
             people: json,
         })
       });
    }

  removePerson(id) {
    this.setState({ people: this.state.people.filter(person => person.id !== id)});
  }

  render () {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="2">
          <PeopleCard key={person.id}  person={person} />
        </Col>
      )
    })

    return (
      <center>
        <Container>
        <Col>
          {peopleCards}
        </Col>
        </Container>
      </center>
    )
  }
}

export default MainArea;


          