import React, { Component } from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar bg="dark" expand="lg">
          <div class="container-fluid">
            <Nav className="fa-beat">
              <Nav.Item className="d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faEye} style={{color: "#ffffff",}} className="fa-2x" />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/restaurant" className="text-white">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/userlist" className="text-white">Customers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/orderlist" className="text-white">Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/logout" className="text-white">Logout</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
      </Navbar>
    </header>
    );
  }
}
