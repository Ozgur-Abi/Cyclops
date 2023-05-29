import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Container } from "react-bootstrap";

function OrderList() {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const checkEmail = async () => {
      const response = await fetch("/api/getEmail");
      if (response.url === "http://localhost:8080/login") {
        window.location.href = "http://localhost:3000/login";
      }
    };

    checkEmail();
  }, []);

  const fetchOrders = async () => {
    const response = await fetch("/api/order/all");
    const orderArray = await response.json();
    setOrderList(orderArray);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  async function deliverOrder(orderId) {
    let data = new FormData();
    data.set("oid", orderId);

    const response = await fetch("/api/order/deliverorder", {
      method: "POST",
      body: data,
    });

    let text = await response.text();

    if (text === "success") fetchOrders();
  }

  return (
    <div>
      <h2
        className="mt-md-5 d-flex justify-content-center text-decoration-underline"
        style={{ fontSize: 30 }}
      >
        {" "}
        Today's Orders
      </h2>
      <Container>
        <Row xs={1} md={4} className="g-4 mt-md-1 mb-5">
          {orderList.map((order, index) => (
            <ListGroup horizontal>
              <Card className="card" style={{ width: "16rem" }}>
                <Card.Body>
                  <Card.Subtitle className="my-2">
                    Customer:{" "}
                    {order.customer.name + " " + order.customer.surname}
                  </Card.Subtitle>

                  <Card.Subtitle className="my-2">
                    Order: {order.orderText}
                  </Card.Subtitle>
                  <div className="w-100 mt-4 d-flex justify-content-center align-items-end">
                    <Button
                      className="my-2 shadowed-btn"
                      variant={order.delivered ? "dark" : "primary"}
                      onClick={() => deliverOrder(order.id)}
                      disabled={order.delivered}
                    >
                      {order.delivered ? "Delivered" : "Mark as Delivered"}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </ListGroup>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export { OrderList };
