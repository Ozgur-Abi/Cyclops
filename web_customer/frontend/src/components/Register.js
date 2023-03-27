import React, { Component } from 'react';

export class Register extends Component {
  static displayName = Register.name;

  render() {
    return (
        <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>Re-type password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
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
