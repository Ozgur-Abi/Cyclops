import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export class UserList extends Component {
  static displayName = UserList.name;

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
    //customerArray.push({name: "Ali",surname:"Babacan",sex:"Mail",age:31})
    this.setState({customerList: customerArray});
  }

  render() {
    const {customerList} = this.state;
    return (
        <div>
          <h3 style={{textAlign: 'center'}}>Welcome to Cyclops!</h3>
          <p style={{textAlign: 'center'}}>Please choose the user you would like to learn intimate secrets and personal knowledge of :</p>
          <ul>
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

          </ul>
        </div>
    );
  }
}