import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h3 style={{textAlign: 'center'}}>Welcome to Cyclops Web Client!</h3>
        <p style={{textAlign: 'center'}}>Please choose the restaurant you would like to manage from below:</p>
        <ul class="text-center">
          <button type="submit" className="btn btn-primary">
            Jankat's Place
          </button>
          <button type="submit" className="btn btn-primary">
            Osman's Place
          </button>
          <button type="submit" className="btn btn-primary">
            Kaan's Place
          </button>
        </ul>
      </div>
    );
  }
}
