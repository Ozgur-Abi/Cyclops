import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export class OrderList extends Component {
  static displayName = OrderList.name;

  state = {
    orderList: []
  };

  async componentWillMount() {
    const response = await fetch('/getEmail');
    if (await response.url == "http://localhost:8080/login")
      window.location.href = 'http://localhost:3000/login'
  }

  async componentDidMount() {
    const response = await fetch('/order/all');
    const orderArray = await response.json();
    console.log(orderArray);
    this.setState({orderList: orderArray});
  }

  render() {
    const {orderList} = this.state;
    return (
        <div>
          <h3 style={{textAlign: 'center'}}>Order List</h3>
          <ul>
            {orderList.map((order,index) => (
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Order #{index + 1}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Order ID: {order.id}</ListGroup.Item>
                    <ListGroup.Item>Customer: {order.customer.name + " " + order.customer.surname}</ListGroup.Item>
                    <ListGroup.Item>Table ID: {order.tableId}</ListGroup.Item>
                    <ListGroup.Item>Order: {order.orderText}</ListGroup.Item>
                  </ListGroup>
                </Card>
            ))}

          </ul>
        </div>
    );
  }
}