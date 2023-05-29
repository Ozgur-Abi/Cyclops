import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    setLoading(true);

    const response = await fetch("/api/perform_login", {
      method: "POST",
      body: data,
    });

    console.log(response);

    if (response.url === "http://localhost:8080/login") {
      setLoading(false);
      window.location.href = "http://localhost:3000/home";
    } else {
      //show error message
    }
  };

  useEffect(() => {
    const checkEmail = async () => {
      const response = await fetch("/api/getEmail");
      if (response.url !== "http://localhost:8080/login") {
        window.location.href = "http://localhost:3000/home";
      }
    };
    checkEmail();
  }, []);

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={5} xs={12}>
          <Card className="card px-4 pt-3 pb-3">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <div className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faEye} className="fa-4x " />
                </div>
                <h2 className="fw-bold mb-2 text-center">CYCLOPS</h2>
                <div className="mb-3">
                  <Form onSubmit={handleSubmit}>
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
                        required
                      />
                    </InputGroup>
                    <div className="d-flex justify-content-center align-items-center">
                      <Button
                        type="submit"
                        className="mt-3"
                        variant="dark"
                        disabled={loading}
                      >
                        Login{" "}
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
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <a className="mt-3 link" href="/register">
                        Don't have an account?
                      </a>
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

export { Login };
