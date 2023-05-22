import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Col, Container, Row} from "react-bootstrap";

export class UserList extends Component {
  static displayName = UserList.name;

  columnsPerRow = 4;

  state = {
    customerList: []
  };

  async componentWillMount() {
    const response = await fetch('/getEmail');
    if (await response.url == "http://localhost:8080/login")
      window.location.href = 'http://localhost:3000/login'
  }

  async componentDidMount() {
    const response = await fetch('/customer/all');
    const customerArray = await response.json();
    console.log(customerArray);
    this.setState({customerList: customerArray});
  }



  render() {
    const {customerList} = this.state;
    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Customer List</h3>
            <Row xs={1} md={3} className="g-4">
                {customerList.map((customer,index) => (
                    <ListGroup horizontal>
                        <ListGroup.Item>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Customer #{index + 1}</Card.Title>
                                    <Card.Subtitle>Name: {customer.name}</Card.Subtitle>
                                    <Card.Subtitle>Surname: {customer.surname}</Card.Subtitle>
                                    <Card.Subtitle>Sex: {customer.sex}</Card.Subtitle>
                                    <Card.Subtitle>Age: {customer.age}</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                    </ListGroup>
                ))}
            </Row>
        </div>
    );
  }
}