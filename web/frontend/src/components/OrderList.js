import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import {Button, Container} from "react-bootstrap";
import {Form} from "react-bootstrap";

export class OrderList extends Component {
  static displayName = OrderList.name;

  state = {
    orderList: []
  };

  async componentWillMount() {
    const response = await fetch('/api/getEmail');
    if (await response.url == "http://localhost:8080/login")
      window.location.href = 'http://localhost:3000/login'
  }

  async componentDidMount() {
    const response = await fetch('/api/order/all');
    const orderArray = await response.json();
    this.setState({orderList: orderArray});
  }

  async deliverOrder(oid) {
    const data = oid;

    fetch('/api/order/deliverorder',{
        method: 'POST',
        body: {'oid':data}
    }).then(async function(response){
        let text = await response.text();

        if(text ==='success'){
            window.location.href = 'http://localhost:3000/orderlist'
        }
    })
  }
  render() {
    const {orderList} = this.state;
    return (
        <div>
          <h2 className="mt-md-5 d-flex justify-content-center text-decoration-underline" style={{fontSize:30}}> Today's Orders</h2>
          <Container>
            <Row xs={1} md={4} className="g-4 mt-md-1">
              {orderList.map((order,index) => (
                  <ListGroup horizontal>
                    <ListGroup.Item>
                      <Card style={{ width: '18rem' }} >
                        <Card.Body >
                          <Card.Title>Order ID: {order.id}</Card.Title>
                          <Card.Subtitle>Customer: {order.customer.name + " " + order.customer.surname}</Card.Subtitle>
                          <Card.Subtitle>Table ID: {order.tableId}</Card.Subtitle>
                          <Card.Subtitle>Order: {order.orderText}</Card.Subtitle>
                          <Card.Subtitle>Status: {order.delivered}</Card.Subtitle>
                            <Button onClick={this.deliverOrder(order.id)}>Delivered</Button>
                        </Card.Body>
                      </Card>
                    </ListGroup.Item>
                  </ListGroup>
              ))}
            </Row>
          </Container>
        </div>
    );
  }
}