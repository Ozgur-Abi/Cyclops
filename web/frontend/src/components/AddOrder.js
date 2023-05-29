import React, { useState } from "react";
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

function AddOrder() {
  const [loading, setLoading] = useState(false);

  async function createOrder(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    setLoading(true);

    const response = await fetch("/api/order/addorder", {
      method: "POST",
      body: data,
    });

    let text = await response.text();

    if (text === "success") {
      window.location.href = "http://localhost:3000/orderlist";
    }

    setLoading(false);
  }

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card class="px-4">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center ">Create an order</h2>
                <div className="mb-3 p-4">
                  <Form onSubmit={createOrder}>
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
                      <Button variant="dark" className="shadowed-btn" type="submit" disabled={loading}>
                        Submit{" "}
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

export { AddOrder };
