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
        fetch('/api/perform_login', {
            method: 'POST',
            body: data,
        }).then(async function (response) {
            console.log(await response)
            if (!response.url.toString().includes("/login")){
                window.location.href = '/home'
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
                                            <a className="mt-3" href="/register">Don't have an account?</a>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        /**<form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>*/
    );
  }
}
