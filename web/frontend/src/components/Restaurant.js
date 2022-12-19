import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: "9AM - 12AM",
    Capacity: 21,
  },
  {
    name: "12AM - 3PM",
    Capacity: 19,
  },
  {
    name: "3PM - 6PM",
    Capacity: 45,
  },
  {
    name: "6PM - 9PM",
    Capacity: 37,
  },
  {
    name: "9PM - 12PM",
    Capacity: 16,
  }
];
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
<<<<<<< HEAD
      <div>
        <h1>Mr Xi's Canine Delight</h1>
        <p>Müşteri Sayısı: 19554/22000</p>
          <p>{testdata}</p>
        <p>Yoğunluk: 9 köpek/metrekare</p>
=======
      <div class="container">
        <div class="row">
        <div class="col-6 mr-100" >
            <h2 style={{textAlign:'center'}}>Customer Count</h2>
            <h5 style={{textAlign:'center'}}>There are 37
            customers in the restaurant right now.
            </h5>
            <p style={{textAlign:'center'}}>The restaurants maximum capacity is: 52 customers.</p>
          </div>
          <div class="col-6 m-100">
            <BarChart
              width={700}
              height={500}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Capacity" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
>>>>>>> 6d805cfb22ffffa775c1545c4cb6ba193f05ba94
      </div>
    );
  }
}