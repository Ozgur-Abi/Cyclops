import React, {Component} from "react";
import {Button, Card, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

export class AddOrder extends Component {

    constructor(){
        super();
        this.createOrder = this.createOrder.bind(this);
    }

    async createOrder(event){
        event.preventDefault();
        const data = new FormData(event.target);

        fetch("/api/order/addorder", {
            method: 'POST',
            body: data
        }).then(async function(response) {
            let text = await response.text();

            if(text === 'success')
                window.location.href = 'http://localhost:3000/orderlist'
        })
    }

    render(){
        return(
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card class="px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-center ">
                                        Create an order
                                    </h2>
                                    <div className="mb-3" >
                                        <Form onSubmit={this.createOrder}>
                                            <Form.Label>Customer ID</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    id="cid"
                                                    name="cid"
                                                    placeholder="Customer ID"
                                                />
                                            </InputGroup>
                                            <Form.Label>Table ID</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    id="tid"
                                                    name="tid"
                                                    placeholder="Table ID"
                                                />
                                            </InputGroup>
                                            <Form.Label>Order</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    id="order"
                                                    name="order"
                                                    placeholder="Order"
                                                />
                                            </InputGroup>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <Button type="submit">Submit</Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}