import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

    async componentWillMount() {
        const response = await fetch('/getEmail');
        if (await response.url == "http://localhost:8080/login")
            window.location.href = 'http://localhost:3000/login'
    }

  render() {
    return (
      <div>
        <h3 style={{textAlign: 'center'}}>Welcome to Cyclops Web Client!</h3>
        <p style={{textAlign: 'center'}}>Please choose the restaurant you would like to manage from below:</p>

      </div>
    );
  }
}
