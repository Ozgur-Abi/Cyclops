import React, { Component } from 'react';

export class Restaurant extends Component {
  static displayName = Restaurant.name;

  render() {
    return (
      <div>
        <h1>Mr Xi's Canine Delight</h1>
        <p>Müşteri Sayısı: 19554/22000</p>
        <p>Yoğunluk: 9 köpek/metrekare</p>
      </div>
    );
  }
}
