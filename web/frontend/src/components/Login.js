import React, { Component } from 'react';
import {Card, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

export class Login extends Component {
    static displayName = Login.name;

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/perform_login', {
            method: 'POST',
            body: data,
        }).then(async function (response) {
            console.log(await response)
            if (response.url == "http://localhost:8080/login"){
                window.location.href = 'http://localhost:3000/home'
            }

            else{
                //show error message
            }

        });
    }

    render() {
        return (
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card class="px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <FontAwesomeIcon icon="fa-solid faEye" style={{color: "#000000",}} />
                                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                                        CYCLOPS
                                    </h2>
                                    <div className="mb-3" >
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Label>Email</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Enter email"
                                                />
                                            </InputGroup>
                                            <Form.Label>Password</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Enter password"
                                                />
                                            </InputGroup>
                                            <div className="mb-3">
                                                <Form.Check
                                                    id={'customCheck1'}
                                                    label={'Remember me'}
                                                />
                                            </div>
                                            <Col>
                                                <Button type="submit">Login</Button>
                                            </Col>
                                            <Col>
                                                <Form.Label className="justify-content-right">Don't have an account?</Form.Label>
                                                <Button href="/register" className="pull-right">Register</Button>
                                            </Col>
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
