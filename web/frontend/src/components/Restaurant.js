import React, { Component } from 'react';

export class Restaurant extends Component {
  static displayName = Restaurant.name;

    state = {
        testdata: ""
    };

    async componentDidMount() {
        const response = await fetch('/tabledata/test');
        const body = await response.json();
        this.setState({testdata: body["tableNo"]});

    }

  render() {
      const {testdata} = this.state;

    return (
      <div>
        <h1>Mr Xi's Canine Delight</h1>
        <p>Müşteri Sayısı: 19554/22000</p>
          <p>{testdata}</p>
        <p>Yoğunluk: 9 köpek/metrekare</p>
      </div>
    );
  }
}
