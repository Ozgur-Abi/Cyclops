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

  render() {
    return (
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
      </div>
    );
  }
}