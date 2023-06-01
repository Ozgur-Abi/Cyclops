import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import { ProgressBar } from 'react-bootstrap';

function Home() {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    const getEmail = async () => {
      const response = await fetch("/api/getEmail");
      if (response.url.includes("login")) {
        window.location.href = "/login";
      }
    };

    getEmail();
  }, []);


  useEffect(() => {
    const getRestaurantList = async () => {
      const response = await fetch("/api/res/all");
      const resArray = await response.json();
      console.log(resArray);
      setRestaurantList(resArray);
    };

    getRestaurantList();

    const interval = setInterval(() => {
      getRestaurantList();
    }, 60000); 

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-vh-100">
      <h3 style={{ textAlign: "center" }} className="mt-5 mb-5">
        Welcome to Cyclops!
      </h3>
      <Container>
        <Row xs={1} md={4} className="g-4 mt-md-1 mb-5">
          {restaurantList.map((restaurant) => (
            <ListGroup horizontal>
              <Card className="card" style={{ width: "18rem", minHeight:"18rem" }}>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="text-center">
                    {restaurant.restaurantName}
                  </Card.Title>
                  <hr/>

                  <Card.Subtitle className="my-2">
                    Current Customers: {restaurant.currentCustomerCount}
                  </Card.Subtitle>

                  <Card.Subtitle className="my-2">
                    Restaurant Capacity: {restaurant.maxCustomerCount}
                  </Card.Subtitle>

                  <Card.Subtitle className="my-2">
                    Address: {restaurant.address}
                  </Card.Subtitle>
                  <Card.Subtitle className="my-2">
                    Contact: {restaurant.telephone}
                  </Card.Subtitle>
                  <Card.Subtitle className="my-2">
                    {restaurant.open
                      ? "Restaurant is currently open."
                      : "Restaurant is currently closed."}
                  </Card.Subtitle>

                  <div className="progressBar">
                    <ProgressBar striped variant="secondary" now={restaurant.currentCustomerCount/restaurant.maxCustomerCount * 100} animated/>
                  </div>

                </Card.Body>
              </Card>
            </ListGroup>
          ))}
        </Row>
      </Container>
      {/* <ul>
        {restaurantList.map((restaurant) => (
          <ListGroup horizontal className="d-flex justify-content-center">
            <ListGroup.Item>
              <Card style={{ width: "28rem" }}>
                <a
                  class="btn btn-primary"
                  href={"/restaurant/" + restaurant.restaurantNo}
                >
                  {restaurant.restaurantName}
                </a>
              </Card>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </ul> */}
    </div>
  );
}

export { Home };
