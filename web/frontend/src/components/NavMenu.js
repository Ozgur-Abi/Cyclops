import React, { Component } from 'react';
import './NavMenu.css';

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
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div
            class="collapse navbar-collapse navbar-expand-lg"
            id="navbarCenteredExample" >
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a class="navbar-brand nav-link active text-white" aria-current="page" href="#">Cyclops</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" href="/">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" href="/register">Register</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" href="/restaurant">Restaurant</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" href="/userlist">Customers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="/orderlist">Orders</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    );
  }
}
