import React, { useState } from "react";
import { Button, Form, InputGroup, Modal, Spinner } from "react-bootstrap";

function EditCustomer({ show, handleClose, customer }) {
  const [loading, setLoading] = useState(false);

  const editCustomer = async (event) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.target);
    data.set("cid", customer.id);

    const response = await fetch("/api/customer/editcustomer", {
      method: "POST",
      body: data,
    });
    let text = await response.text();

    if (text === "success") {
      setLoading(false);
      handleClose();
    }
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Form onSubmit={editCustomer}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Age</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              type="number"
              id="age"
              name="age"
              placeholder="Age"
              defaultValue={customer?.age || ""}
            />
          </InputGroup>
          <Form.Label>Sex</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="sex"
              name="sex"
              placeholder="Sex"
              defaultValue={customer?.sex || ""}
            />
          </InputGroup>
          <Form.Label>Name</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="name"
              name="name"
              placeholder="Name"
              defaultValue={customer?.name || ""}
            />
          </InputGroup>
          <Form.Label>Surname</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              id="surname"
              name="surname"
              placeholder="Surname"
              defaultValue={customer?.surname || ""}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" type="submit" disabled={loading}>
            Save Changes{" "}
            {loading && <Spinner animation="border" as="span" size="sm" role="status" aria-hidden="true" />}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export { EditCustomer };
