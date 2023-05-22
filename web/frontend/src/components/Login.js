import React, { Component } from 'react';
import {Button, Card, Col, Container, Form, InputGroup, Row, Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from '@fortawesome/free-solid-svg-icons'

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
                                    <div className="d-flex justify-content-center align-items-center">
                                        <FontAwesomeIcon icon={faEye} className="fa-4x "/>
                                    </div>
                                    <h2 className="fw-bold mb-2 text-center ">
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
                                            <div className="d-flex justify-content-center align-items-center">
                                                <Button type="submit">Login</Button>

                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <a href="/register">Don't have an account?</a>
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
