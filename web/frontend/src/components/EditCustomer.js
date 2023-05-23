import React, {Component} from "react";
import {Button, Card, Col, Container, Form, InputGroup, Row} from "react-bootstrap"

export class EditCustomer extends Component{

    customerId = parseInt(window.location.href.split('/')[4]) + 1
    constructor(){
        super();
        this.editCustomer = this.editCustomer.bind(this);
    }
    async editCustomer(event){
        event.preventDefault();
        const data = new FormData(event.target);
        data.set('cid', this.customerId);

        fetch("/api/customer/editcustomer", {
            method: 'POST',
            body: data
        }).then(async function(response) {
            let text = await response.text();

            if(text === 'success')
                window.location.href = 'http://localhost:3000/userlist'
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
                                        Edit customer
                                    </h2>
                                    <div className="mb-3" >
                                        <Form onSubmit={this.editCustomer}>
                                            <div>
                                                <Form.Label>Customer ID: {this.customerId}</Form.Label>
                                            </div>
                                            <Form.Label>Age</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    type="number"
                                                    id="age"
                                                    name="age"
                                                    placeholder="Age"
                                                />
                                            </InputGroup>
                                            <Form.Label>Sex</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    id="sex"
                                                    name="sex"
                                                    placeholder="Sex"
                                                />
                                            </InputGroup>
                                            <Form.Label>Name</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name"
                                                />
                                            </InputGroup>
                                            <Form.Label>Surname</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    id="surname"
                                                    name="surname"
                                                    placeholder="Surname"
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