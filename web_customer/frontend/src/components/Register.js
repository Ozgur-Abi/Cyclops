import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import {Alert, Button, Card, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export class Register extends Component {


    static displayName = Register.name;
    constructor() {
        super();
        this.state = {emailStatus : false};
        this.updateState = this.updateState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateState(){
        this.setState({emailStatus: true})
        console.log(this.state)
    }
    handleSubmit(event) {
        const self = this;
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/api/register', {
            method: 'POST',
            body: data,
        }).then(async function (response) {
            let text = await response.text();

            if (text === "success") {
                window.location.href = '/home';
            }
            else if (text === "emailExists"){
                self.updateState();
            }
        })
    }


    render() {
        let emailAlert;
        if(this.emailStatus) {
            emailAlert=<Alert emailInUse={this.emailStatus}>That email is in use.</Alert>
            //this.setState({emailInUse: false});
        }
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
                                            <Form.Label>Username</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    type="username"
                                                    id="username"
                                                    name="username"
                                                    placeholder="Enter username"
                                                />
                                            </InputGroup>

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

                                            <Form.Label>Re-type Password</Form.Label>
                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Re-type password"
                                                />
                                            </InputGroup>
                                            <div className="d-flex justify-content-center align-items-center mt-4">
                                                <Button  type="submit">Register</Button>
                                                <a className="mx-4" href="/login">Return to Login</a>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        {emailAlert}
                    </Col>
                </Row>
            </Container>
        );
    }
}
