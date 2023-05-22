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

    getColumnsForRow =()=>{
        let items = this.customerList.map((customer, index) => {
            return (
                <Col>
                    <Card key={customer.id}>
                        <Card.Body>
                            <Card.Title>Customer #({index} + 1)</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Name: {customer.name}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Surname: {customer.surname}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Sex: {customer.sex}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Age: {customer.age}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            );
        });
        return items;
    };

  render() {
    //const {customerList} = this.state;
    return (
        <Container>
            <Row md={this.columnsPerRow}>
                {this.getColumnsForRow()}
            </Row>
        </Container>

        /**  <ul>
            {customerList.map((customer,index) => (
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Customer #{index + 1}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Name: {customer.name}</ListGroup.Item>
                    <ListGroup.Item>Surname: {customer.surname}</ListGroup.Item>
                    <ListGroup.Item>Sex: {customer.sex}</ListGroup.Item>
                    <ListGroup.Item>Age: {customer.age}</ListGroup.Item>
                  </ListGroup>
                </Card>
            ))}

          </ul>*/
    );
  }
}