import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import {Container} from "react-bootstrap";
import {Form} from "react-bootstrap";

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
                <ListGroup horizontal className="d-flex justify-content-center">
                    <ListGroup.Item>
                        <Card style={{ width: '28rem'}} >
                            <a class="btn btn-primary" href = {"/restaurant/" + restaurant.restaurantNo}>{restaurant.restaurantNo + ": " + restaurant.restaurantName}</a>
                        </Card>
                    </ListGroup.Item>
                </ListGroup>
            ))}
        </ul>
      </div>
    );
  }
}
//<li> <a href = {"/restaurant/" + restaurant.restaurantNo}>{restaurant.restaurantNo + ": " + restaurant.restaurantName}</a></li>
