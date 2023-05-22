import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

    state = {
        restaurantList: []
    };

  async componentWillMount() {
      const response = await fetch('/api/getEmail');
      if (await response.url.toString().includes("/login"))
          window.location.href = '/login'
  }

    async componentDidMount() {
        const response = await fetch('/api/res/all');
        const resArray = await response.json();
        console.log(resArray);
        this.setState({restaurantList: resArray});
    }
  render() {
      const {restaurantList} = this.state;
    return (
      <div>
        <h3 style={{textAlign: 'center'}} className="mt-3">Welcome to Cyclops!</h3>
        <p style={{textAlign: 'center'}}>Please choose the restaurant you would like to see details of:</p>
        <ul>
            {restaurantList.map(restaurant => (
                <li> <a href = {"/restaurant/" + restaurant.restaurantNo}>{restaurant.restaurantNo + ": " + restaurant.restaurantName}</a></li>
            ))}
        </ul>
      </div>
    );
  }
}
