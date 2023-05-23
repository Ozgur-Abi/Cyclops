import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Button, Col, Container, Row, Image} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

export class UserList extends Component {
  static displayName = UserList.name;

  state = {
    customerList: []
  };

  async componentWillMount() {
    const response = await fetch('/api/getEmail');
    if (await response.url == "http://localhost:8080/login")
      window.location.href = 'http://localhost:3000/login'
  }

  async componentDidMount() {
    const response = await fetch('api/customer/all');
    const customerArray = await response.json();
    console.log(customerArray);
    this.setState({customerList: customerArray});
  }

  setAddress(index){
    return '../../../../comp_vision/opencv-face-recognition-python-master/training-data/s' + (index + 1) +'/image.jpg';
  }

  editCustomer(cid){
    let link = 'http://localhost:3000/editcustomer/' + cid
    window.location.href = link
  }

  //MÜŞTERİ RESMİ CARD.IMG'YE EKLENECEK
  render() {
    const {customerList} = this.state;
    return (
        <div>
          <h2 className="mt-md-5 d-flex justify-content-center text-decoration-underline" style={{fontSize:30}}> Today's Customers</h2>
          <Container>
            <Row xs={1} md={4} className="g-4 mt-md-1">
                {customerList.map((customer,index) => (
                    <ListGroup horizontal>
                        <ListGroup.Item>
                            <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src='http://www.clipartbest.com/cliparts/ncE/54X/ncE54XyAi.jpg' />
                                <Card.Body>
                                  <Card.Title className="my-2">Customer #{index + 1}</Card.Title>
                                  <Card.Subtitle className="my-2">Name: {customer.name}</Card.Subtitle>
                                  <Card.Subtitle className="my-2">Surname: {customer.surname}</Card.Subtitle>
                                  <Card.Subtitle className="my-2">Sex: {customer.sex}</Card.Subtitle>
                                  <Card.Subtitle className="my-2">Age: {customer.age}</Card.Subtitle>
                                  <Button onClick={()=> this.editCustomer(index)}>Edit Customer</Button>
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