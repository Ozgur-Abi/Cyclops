import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export class UserList extends Component {
  static displayName = UserList.name;

  render() {
    return (
      <ul>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Customer #1</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Name: Cenk Hoca</ListGroup.Item>
            <ListGroup.Item>Entered at: 12:00</ListGroup.Item>
            <ListGroup.Item>Left at: - </ListGroup.Item>
            <ListGroup.Item>Table no: 19</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="primary">Show Customer Details</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Customer #2</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Name: Ahmet Sonuç</ListGroup.Item>
          <ListGroup.Item>Entered at: 10:32</ListGroup.Item>
          <ListGroup.Item>Left at: - </ListGroup.Item>
          <ListGroup.Item>Table no: 5</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">Show Customer Details</Button>
        </Card.Body>
      </Card>

      
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Customer #3</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Name: Savaş Cebeci</ListGroup.Item>
          <ListGroup.Item>Entered at: 14:00</ListGroup.Item>
          <ListGroup.Item>Left at: 17:00 </ListGroup.Item>
          <ListGroup.Item>Table no: 8</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">Show Customer Details</Button>
        </Card.Body>
      </Card>
      
    </ul>
    );
  }
}
