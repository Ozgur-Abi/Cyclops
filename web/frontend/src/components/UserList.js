import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Button, Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { EditCustomer } from "./EditCustomer";

function UserList() {
  const [customerList, setCustomerList] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState({})

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api/customer/all");
      const customerArray = await response.json();
      console.log(customerArray);
      setCustomerList(customerArray);
    };

    fetchData();
  }, [showModal]);

  const editCustomer = (cid) => {
    setCurrentCustomer(customerList[cid])
    openModal()
  };

  //MÜŞTERİ RESMİ CARD.IMG'YE EKLENECEK
  return (
    <div className="min-vh-100">
      <h2
        className="mt-md-5 d-flex justify-content-center text-decoration-underline"
        style={{ fontSize: 30 }}
      >
        Customers
      </h2>
      <Container>
        <Row xs={1} md={4} className="g-4 mt-md-1">
          {customerList.map((customer, index) => (
            <ListGroup horizontal>
                <Card className="card" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    className="h-100"
                    src={"/images/" + customer.id + ".jpg"}
                  />
                  <Card.Body>
                    <Card.Title className="mb-4 text-center">
                      Customer #{index + 1}
                    </Card.Title>
                    <Card.Subtitle className="my-2">
                      Name: {customer.name}
                    </Card.Subtitle>
                    <Card.Subtitle className="my-2">
                      Surname: {customer.surname}
                    </Card.Subtitle>
                    <Card.Subtitle className="my-2">
                      Sex: {customer.sex}
                    </Card.Subtitle>
                    <Card.Subtitle className="my-2">
                      Age: {customer.age}
                    </Card.Subtitle>
                    <Card.Subtitle className="my-2 mb-4">
                      Is in restaurant: {"" + customer.inRes}
                    </Card.Subtitle>
                    <Button variant="dark" onClick={() => editCustomer(index)}>
                      Edit Customer
                    </Button>
                  </Card.Body>
                </Card>
              <EditCustomer show={showModal} handleClose={closeModal} customer={currentCustomer}/>
            </ListGroup>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export { UserList };
