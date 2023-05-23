import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Col, Row, Container, Form} from "react-bootstrap";

export class Home extends Component {
    static displayName = Home.name;
    state = {
        countData: [],
		currentCount: 0,
		maxCount: 0,
        date: JSON.stringify(Date()).slice(0,10)
    };

	async componentWillMount() {
		const response = await fetch('/api/getEmail');
		if (await response.url == "http://localhost:8080/login")
		  window.location.href = 'http://localhost:3000/login'
	}

    async componentDidMount() {
        const response = await fetch('/api/tabledata/gettodaycount');
		const response2 = await fetch('/api/tabledata/totalnow');
        const countArray = await response.json();
		const curData = await response2.json();
        let cData = [];

        for(let i = 0; i < 24; i++){
            cData.push(
                {
                    name: i + "-" + (i+1),
                    Capacity: countArray[i]
                }
            )
        }
        this.setState({countData: cData, currentCount: curData.customerCount, maxCount: curData.tableId * -1});
    }

    async setDate(chosenDate){
        this.setState({date: chosenDate})
        console.log(this.date)
    }


    render() {
        const {countData, currentCount, maxCount, date} = this.state;
        return (
            <Container  className="d-flex justify-content-center align-items-center mt-md-5">
                <Row>
                    <Col>
                        <div>
                            <h2 className="mt-md-5 d-flex justify-content-center text-decoration-underline" style={{fontSize:30}} style={{textAlign:'center'}}>Customer Count</h2>
                            <h5 style={{textAlign:'center'}}>There are {currentCount} customers in the restaurant right now.
                            </h5>
                            <p style={{textAlign:'center'}}>The restaurants maximum capacity is: {maxCount} customers.</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <BarChart
                                width={700}
                                height={500}
                                data={countData}
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
                    </Col>
                </Row>
                <Row>
                    <Form.Group className="md-12" controlId="chosenDate">
                        <Form.Control
                            type="date"
                            size="sm"
                            value={this.date}
                            onChange={(e) => this.setDate(e.target.value)}
                        />
                    </Form.Group>
                </Row>
            </Container>
        );
    }
}
