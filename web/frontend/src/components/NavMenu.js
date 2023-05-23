import React, { Component } from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import ".//NavMenu.css"

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

  logout(){
    const response = fetch('/api/logout')
  }
  render() {
    return (
        <Navbar bg="dark">
          <Nav className="justify-content-start">
            <Nav.Item className="d-flex align-items-center justify-content-center mx-3" >
              <FontAwesomeIcon icon={faEye} style={{color: "#ffffff",}} className="fa-2x" />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home" className="text-white mx-3">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/userlist" className="text-white mx-3">Customers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/orderlist" className="text-white mx-3">Orders</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href='/addOrder' className="text-white mx-3">Add Order</Nav.Link>
            <Nav.Link href='/login' className="text-white mx-3" onClick={this.logout}>Logout</Nav.Link>
          </Nav>
      </Navbar>
    );
  }
}
