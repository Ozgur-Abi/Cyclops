import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

export class Register extends Component {


  static displayName = Register.name;
    constructor() {

        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

         fetch('/api/register', {
            method: 'POST',
            body: data,
        }).then(async function (response) {
            let text = await response.text();

            if (text == "success") {
                window.location.href = '/'
            }
            else if (text == "emailExists"){
                //add error message
            }
        });
    }


  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
              id = "username"
              name = "username"
            className="form-control"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
              id = "email"
              name = "email"
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
              id = "password"
              name = "password"
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-3">
          <label>Re-type password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    );
  }
}
