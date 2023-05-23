import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Col, Row, Container, Form} from "react-bootstrap";

export class Home extends Component {
    static displayName = Home.name;
    state = {
        countData: [],
		currentCount: 0,
		maxCount: 0,
        date: new Date()
    };

	async componentWillMount() {
		const response = await fetch('/api/getEmail');
		if (await response.url == "http://localhost:8080/login")
		  window.location.href = 'http://localhost:3000/login'
	}

    async componentDidMount() {
        const data = new FormData();
        data.set('year', this.state.date.getFullYear());
        data.set('month', this.state.date.getMonth()+1);
        data.set('day',this.state.date.getDate());
        const response = await fetch("/api/tabledata/getcount", {
            method: 'POST',
            body: data
        });
        const response2 = await fetch('/api/tabledata/totalnow');
        const countArray = await response.json();
        const curData = await response2.json();
        let cData = [];
        for(let i = 0; i < 24; i++){
            cData.push(
                {
                    name: i + "-" + (i+1),
                    Average: countArray[i]
                }
            )
        }
        this.setState({countData: cData, currentCount: curData.customerCount, maxCount: curData.tableId * -1});
    }

    async sendDate(chosenDate){

        //this.setState({date: chosenDate})
        console.log(chosenDate);
        const data = new FormData();
        data.set('year', parseInt(chosenDate.substring(0,4)));
        data.set('month', parseInt(chosenDate.substring(5,7)));
        data.set('day', parseInt(chosenDate.substring(8,10)));
        const response = await fetch("/api/tabledata/getcount", {
            method: 'POST',
            body: data
        });
        const response2 = await fetch('/api/tabledata/totalnow');
        const countArray = await response.json();
        const curData = await response2.json();
        let cData = [];
        for(let i = 0; i < 24; i++){
            cData.push(
                {
                    name: i + "-" + (i+1),
                    Average: countArray[i]
                }
            )
        }
        this.setState({countData: cData, currentCount: curData.customerCount, maxCount: curData.tableId * -1});
        console.log(cData);
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
                                <YAxis domain={[0, maxCount]}/>
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Average" fill="#82ca9d" />
                            </BarChart>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="md-12" controlId="chosenDate">
                            <Form.Control
                                type="date"
                                size="sm"
                                value={this.date}
                                onChange={(e) => this.sendDate(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        );
    }
}
