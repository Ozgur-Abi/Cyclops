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

  logout(){
    const response = fetch('/api/logout')
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
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
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href='/login' className="text-white mx-3" onClick={this.logout}>Logout</Nav.Link>
          </Nav>
        </Navbar>
    );
  }
}
