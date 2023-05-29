import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner
} from "react-bootstrap";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Register() {
  const [emailStatus, setEmailStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateState = () => {
    setEmailStatus(true);
    console.log(emailStatus);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    setLoading(true)

    const response = await fetch("/api/register", {
      method: "POST",
      body: data,
    });

    const text = await response.text();

    if (text === "success") {
      setLoading(false)
      window.location.href = "http://localhost:3000/";
    } else if (text === "emailExists") {
      updateState();
    }
  };

  let emailAlert;
  if (emailStatus) {
    emailAlert = <Alert emailInUse={emailStatus}>That email is in use.</Alert>;
    //setEmailInUse(false)
  }
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={5} xs={12}>
          <Card className="px-4">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <div className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faEye} className="fa-4x " />
                </div>
                <h2 className="fw-bold mb-2 text-center ">CYCLOPS</h2>
                <div className="mb-3">
                  <Form onSubmit={handleSubmit}>
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
                        id="passwordre"
                        name="passwordre"
                        placeholder="Re-type password"
                      />
                    </InputGroup>
                    <div className="d-flex justify-content-center align-items-center mt-4">
                      <Button type="submit" variant="dark">
                        Register{" "}
                        {loading && (
                          <Spinner
                            animation="border"
                            as="span"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        )}
                      </Button>
                      <a className="mx-4 link" href="/login">
                        Return to Login
                      </a>
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

export { Register };
